import { generateDeploymentConfig,loadEncryptedConfig } from "scripts";

const config = generateDeploymentConfig("plh_kids_teens_my");

config.git = {
  content_repo: "https://github.com/ParentingForLifelongHealth/plh-kids-teens-app-my-content.git",
  content_tag_latest: "1.0.4",
};

config.google_drive.sheets_folders = [
  { id: "19wSspWYMbRc75een-kS0q0aq24--75u8", name: "library_app_menu" },
  { id: "1UXVz71HniwdtklFnGUEBzzj8ZHI9oQVo", name: "library_field_values" },
  { id: "1Y8uC9-rqQtsjQgUfeX9qp-vNzsFDUQFU", name: "kids_global" },
  { id: "1GnKk8luhnYcWobeeEfbR23ZSoZakcNF9", name: "kids_teens_global" },
  { id: "1XBq4iGIZHEwzwPk3xbHDAm9WCesjR7kR", name: "library PLH onboarding" },
  { id: "1jQxwGLF84UCVhyicpNI0111JY7a3nOkT", name: "kids_teens_my" },
];

config.google_drive.assets_folders = [
  {id: "1N2GdS5Thka5sJMbC32zyAFKNy61-yn6-", name: "kids_teens_my"},
];

config.android = {
  app_id:'international.idems.plh_kids_teens_my',
  app_name:'Malaysia',
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
  zoom_enabled: true
};

config.ios = {
  app_id:"international.idems.plh_kids_teens_my",
  app_name:"Malaysia",
  zoom_enabled: true
};

config.firebase = {
  config: loadEncryptedConfig('firebase.json'),
}

config.auth = {
  provider: 'firebase',
}

// Hacky fix to point extended deployment to translations within its own repo
config.translations.translated_strings_path = "./app_data/translations_source/translated_strings";

config.web.favicon_asset = "images/logos/favicon.png";

config.api.db_name = "plh_kids_teens_my";
config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "MalaysiaApp";
config.app_config.APP_HEADER_DEFAULTS.title = "MalaysiaApp";
config.app_config.APP_HEADER_DEFAULTS.hidden = true;
config.app_config.APP_FOOTER_DEFAULTS.template = "footer";
config.app_config.APP_FOOTER_DEFAULTS.background = "none";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from MalaysiaApp";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from MalaysiaApp";
config.app_config.APP_THEMES.available = ["plh_kids_teens_za"];
config.app_config.APP_THEMES.defaultThemeName = "plh_kids_teens_za";
config.error_logging = { dsn: "https://644cb52e67f24a09b3fda5d50233e6e9@app.glitchtip.com/19943" };


export default config;
