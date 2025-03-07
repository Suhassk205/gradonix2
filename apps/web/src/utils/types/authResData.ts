export interface authResData {
  success: boolean;
  error: {
    email?: string;
    password?: string;
    username?: string;
  };
}
