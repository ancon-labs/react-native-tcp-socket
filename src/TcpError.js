import { Platform } from 'react-native';
import invert from 'lodash.invert';

const Unknown = -1;

const _ErrorCode = Platform.select({
    ios: {
        Refused: 61,
    },
    android: {
        Refused: 0,
    },
});

/**
 * @type Object.<string, number>
 * @property number Unknown
 * @property number Refused
 */
const ErrorCode = {
    Unknown,
    ..._ErrorCode,
};

const ErrorCodeMap = invert(ErrorCode);

class TcpError extends Error {
    /**
     *
     * @param {string} message Error message
     * @param {number} code Error code
     */
    constructor(message, code) {
        super(message ?? 'Unknown error');
        this.code = ErrorCode[ErrorCodeMap[code]] ?? ErrorCode.Unknown;
    }
}

export { ErrorCode };
export default TcpError;
