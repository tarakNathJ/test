import jwt from "jsonwebtoken";
import { prisma as PrismaClient } from "../../lib/prisma.js";
export const signUp = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            return res
                .status(400)
                .json({ success: false, data: null, error: "INVALID_REQUEST" });
        }
        console.log("here");
        const chackUser = await PrismaClient.user.findUnique({ where: { email } });
        if (chackUser) {
            return res.status(409).json({ message: "User already exists" });
        }
        console.log("here2");
        const newUser = await PrismaClient.user.create({
            data: {
                name,
                email,
                password,
                role,
            },
            //@ts-ignore
            select: { id, name, email, role },
        });
        console.log("here3");
        return res.status(201).json({ success: true, data: newUser, error: null });
    }
    catch (error) {
        return res
            .status(400)
            .json({ success: false, data: null, error: "INVALID_REQUEST" });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                data: null,
                error: "INVALID_REQUEST",
            });
        }
        const chackUser = await PrismaClient.user.findUnique({
            where: { email, password },
        });
        if (!chackUser) {
            return res.status(401).json({
                success: false,
                data: null,
                error: "INVALID_CREDENTIALS",
            });
        }
        const token = jwt.sign({ id: chackUser.id, email: chackUser.email, role: chackUser.role }, "SECRET_KEY", { expiresIn: "1h" });
        return res.status(200).json({
            success: true,
            data: {
                token: token,
            },
            error: null,
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            data: null,
            error: "INVALID_REQUEST",
        });
    }
};
export const createContest = async (req, res) => {
    try {
        //@ts-ignore
        const user_id = req.user.id;
        const { title, description, startTime, endTime } = req.body;
        if (!title || !description || !startTime || !endTime) {
            return res.status(400).json({
                success: false,
                data: null,
                error: "INVALID_REQUEST",
            });
        }
        const newContest = await PrismaClient.contests.create({
            data: {
                title,
                creator_id: user_id,
                description,
                start_time: new Date(startTime),
                end_time: new Date(endTime),
            },
            //@ts-ignore
            select: { id, title, description, creator_id, start_time, end_time },
        });
        return res.status(201).json({
            success: true,
            data: {
                id: newContest.id,
                title: newContest.title,
                description: newContest.description,
                creatorId: newContest.creator_id,
                startTime: newContest.start_time,
                endTime: newContest.end_time,
            },
            error: null,
        });
    }
    catch (error) {
        return res
            .status(400)
            .json({ success: false, data: null, error: "INVALID_REQUEST" });
    }
};
export const getContestData = async (req, res) => {
    try {
        const contestId = req.params.contestId;
        if (!contestId) {
            return res.status(400).json({
                success: false,
                data: null,
                error: "INVALID_REQUEST",
            });
        }
        const contest = await PrismaClient.contests.findUnique({
            where: { id: contestId },
            //@ts-ignore
            select: { id, title, description, creator_id, start_time, end_time },
        });
        if (!contest) {
            return res.status(404).json({
                success: false,
                data: null,
                error: "CONTEST_NOT_FOUND",
            });
        }
        const mcqs = await PrismaClient.mcq_questions.findMany({
            where: { contest_id: contest.contestId },
            //@ts-ignore
            select: {
                //@ts-ignore
                id: id,
                // @ts-ignore
                questionText: question_text,
                // @ts-ignore
                options: options,
                // @ts-ignore
                points: points,
            },
        });
        const dsaProblems = await PrismaClient.dsa_problems.findMany({
            where: { contest_id: contest.contestId },
            //@ts-ignore
            select: {
                //@ts-ignore
                id: id,
                // @ts-ignore
                title: title,
                // @ts-ignore
                description: description,
                // @ts-ignore
                tags: tags,
                // @ts-ignore
                points: points,
                // @ts-ignore
                timeLimit: time_limit,
                // @ts-ignore
                memoryLimit: memory_limit,
            },
        });
        return res.status(200).json({
            success: true,
            data: {
                id: contest.id,
                title: contest.title,
                description: contest.description,
                creatorId: contest.creator_id,
                startTime: contest.start_time,
                endTime: contest.end_time,
                //@ts-ignore
                creatorId: contest.creator_id,
                mcqs: mcqs.map((mcq) => ({
                    id: mcq.id,
                    questionText: mcq.questionText,
                    options: mcq.options,
                    points: mcq.points,
                })),
                dsaProblems: dsaProblems.map((dsaProblem) => ({
                    id: dsaProblem.id,
                    title: dsaProblem.title,
                    description: dsaProblem.description,
                    tags: dsaProblem.tags,
                    points: dsaProblem.points,
                    timeLimit: dsaProblem.timeLimit,
                    memoryLimit: dsaProblem.memoryLimit,
                })),
            },
            error: null,
        });
    }
    catch (error) {
        return res
            .status(400)
            .json({ success: false, data: null, error: "INVALID_REQUEST" });
    }
};
export const createMCQ = async (req, res) => {
    try {
        const contestId = req.params.contestId;
        const { questionText, options, correctOptionIndex, points } = req.body;
        if (!contestId ||
            !questionText ||
            !options ||
            correctOptionIndex === undefined ||
            points === undefined) {
            return res.status(400).json({
                success: false,
                data: null,
                error: "INVALID_REQUEST",
            });
        }
        const findContest = await PrismaClient.contests.findUnique({
            where: { id: contestId },
            //@ts-ignore
            select: { id },
        });
        if (!findContest) {
            return res.status(404).json({
                success: false,
                data: null,
                error: "CONTEST_NOT_FOUND",
            });
        }
        const newMCQ = await PrismaClient.mcq_questions.create({
            data: {
                contest_id: findContest.id,
                question_text: questionText,
                options: options,
                correct_option_index: correctOptionIndex,
                points: points,
            },
            //@ts-ignore
            select: { id, contestId },
        });
        return res.status(201).json({
            success: true,
            data: {
                id: newMCQ.id,
                contestId: newMCQ.contestId,
            },
            error: null,
        });
    }
    catch (error) {
        return res
            .status(400)
            .json({ success: false, data: null, error: "INVALID_REQUEST" });
    }
};
// export const submitMCQAnswers = async (req: Request, res: Response) => {
//   try {
//     const contestId = req.params.contestId;
//     const questionId = req.params.questionId;
//     //@ts-ignore
//     const user_id = req.user.id;
//     const { selectedOptionIndex } = req.body;
//     if (!contestId || !selectedOptionIndex || !questionId) {
//       return res.status(400).json({
//         success: false,
//         data: null,
//         error: "INVALID_REQUEST",
//       });
//     }
//     // Logic to evaluate answers and calculate score would go here
//     return res.status(200).json({
//       success: true,
//       data: {
//         message: "MCQ answers submitted successfully",
//       },
//       error: null,
//     });
//   } catch (error: any) {
//     return res
//       .status(400)
//       .json({ success: false, data: null, error: "INVALID_REQUEST" });
//   }
// }
//# sourceMappingURL=index.js.map