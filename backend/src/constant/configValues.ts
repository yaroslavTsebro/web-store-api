export class ConfigValues{
  public static readonly CONFIG_PATH = '../config/';
  public static readonly ENV_EXTENSION = '.env.';
  public static readonly DEVELOPMENT_EVN = ConfigValues.ENV_EXTENSION + 'development';
  public static readonly DEFAULT_PORT = 3000;
  public static readonly DEFAULT_ACCESS_SECRET = "3000";
  public static readonly DEFAULT_ACCESS_LIFESPAN = "1d";
  public static readonly DEFAULT_REFRESH_LIFESPAN = "3000";
  public static readonly DEFAULT_REFRESH_LIFESPAN_COOKIES = 3000;
  public static readonly DEFAULT_REFRESH_SECRET = "20d";
}