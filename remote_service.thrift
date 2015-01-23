

/**
 * Various codes used for catching errors
 */
enum ErrorCode {
/**
 * If a parameter was invalid
 */
	INVALID_REQUEST = 0,
/**
 * Authentication failed
 */
	INVALID_AUTHSTRING = 1,
/**
 * Requested data could not be found
 */
	NOT_FOUND = 2,
/**
 *	Something went wrong during a download operation
 */
 	DOWNLOAD_ERROR = 3,
/**
 *	Something went wrong during a file operation
 */
 	FILE_ERROR = 4,
/**
 *	Could not read a file
 */
 	NO_READ = 5,
}

/**
 * This exception is thrown when something data-related went wrong
 */
exception EDataException {
/**
 * Detailed reason for the exception
 */
	1: ErrorCode code,
/**
 * A message that describes the exception
 */
	2: string errorMessage,
}

/**
 * Thrown when authentication fails, this is thrown
 */
exception EAuthException {
/**
 * Detailed reason for the exception
 */
	1: ErrorCode code,
/**
 * A message that describes the exception
 */
	2: string errorMessage,
}

struct ConsoleLine {

	/**
	 * A unix-style timestamp (in milliseconds)
	 */
	1:i64 timestamp,
	/**
	 * The actual message from the console
	 */
	2:string message,
	/**
	 * The log level (INFO, WARN, SEVERE etc.)
	 */
	3:string level,
}

struct ConsoleCommand {
	1: string command,
	2: string stdout,
	3: i32 exitCode
	4: list<ConsoleLine> outputLines;
}
service remote_service {
ConsoleCommand
	 runConsoleCommand(1:string authString, 2:string command)
	throws(1:EAuthException aex, 2:EDataException dex)
}
