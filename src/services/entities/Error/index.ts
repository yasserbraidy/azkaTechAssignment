class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401);
    this.name = 'UnauthorizedError';
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string = 'Not Found') {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string = 'Bad Request') {
    super(message, 400);
    this.name = 'BadRequestError';
  }
}

export class ForbiddenError extends ApiError {
  constructor(message: string = 'Forbidden') {
    super(message, 403);
    this.name = 'ForbiddenError';
  }
}

export class ServerError extends ApiError {
  constructor(message: string = 'Internal Server Error') {
    super(message, 500);
    this.name = 'ServerError';
  }
}

export class NotImplemented extends ApiError {
  constructor(message: string = 'Not Implemented') {
    super(message, 501);
    this.name = 'NotImplementedError';
  }
}

export class BadGatewayError extends ApiError {
  constructor(message: string = 'Bad Gateway') {
    super(message, 502);
    this.name = 'BadGatewayError';
  }
}

export class ServiceUnavailableError extends ApiError {
  constructor(message: string = 'Service Unavailable') {
    super(message, 503);
    this.name = 'ServiceUnavailableError';
  }
}
