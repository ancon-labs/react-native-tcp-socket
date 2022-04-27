export default TcpError;
/**
 * @type Object.<string, number>
 * @property number Unknown
 * @property number Refused
 */
export const ErrorCode: {
    [x: string]: number;
};
declare class TcpError extends Error {
    /**
     *
     * @param {string} message Error message
     * @param {number} code Error code
     */
    constructor(message: string, code: number);
    code: number;
}
