import jwt from "jsonwebtoken";
export const authenticate = (req, res, next) => {
    try {
        const token = req.cookies?.accessToken ||
            req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            return res
                .status(401)
                .json({ success: false, data: null, error: "UNAUTHORIZED" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //@ts-ignore
        req.user = decoded;
        next();
    }
    catch (error) { }
};
export const isCreator = (req, res, next) => {
    try {
        //@ts-ignore
        const role = req.user?.role;
        if (role !== "creator") {
            return res.status(403).json({
                success: false,
                data: null,
                error: "FORBIDDEN",
            });
        }
        next();
    }
    catch (error) { }
};
export const isContestee = (req, res, next) => {
    try {
        //@ts-ignore
        const role = req.user?.role;
        if (role !== "contestee") {
            return res.status(403).json({
                success: false,
                data: null,
                error: "FORBIDDEN",
            });
        }
        next();
    }
    catch (error) { }
};
//# sourceMappingURL=index.js.map