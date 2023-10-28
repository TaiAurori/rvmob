import {Dimensions, StyleSheet} from 'react-native';

const commonColours = {
  statusOnline: '#3ABF7E',
  statusIdle: '#F39F00',
  statusBusy: '#F84848',
  statusFocus: '#4799F0',
  statusStreaming: '#977EFF',
  statusOffline: '#A5A5A5',
  statusInvisible: '#A5A5A5',
}

export const themes = {
  Light: { 
    ...commonColours,
    background: '#F6F6F6',
    backgroundPrimary: '#FFFFFF',
    backgroundSecondary: '#F1F1F1',
    backgroundTertiary: '#4D4D4D',
    foregroundPrimary: '#000000',
    foregroundSecondary: '#6E6E6E',
    foregroundTertiary: '#4D4D4D',
    headerPrimary: '#F1F1F1',
    headerSecondary: '#F1F1F1',
    hover: '#0000002B',
    mentionBorder: '#BEAF41',
    mentionBackground: '#383827',
    messageBox: '#F1F1F1',
    messageBoxInput: '#FFFFFF',
    blockQuoteBackground: '#11111166',
    accentColor: '#219E87',
    accentColorForeground: '#000000',
    contentType: 'light',
    error: '#ED4245',
    pingColor: '#FBFF0050',
  },
  Dark: {
    ...commonColours,
    background: '#191919',
    backgroundPrimary: '#242424',
    backgroundSecondary: '#1E1E1E',
    backgroundTertiary: '#4D4D4D',
    foregroundPrimary: '#F6F6F6',
    foregroundSecondary: '#C8C8C8',
    foregroundTertiary: '#848484',
    headerPrimary: '#363636',
    headerSecondary: '#2D2D2D',
    hover: '#0000001A',
    mentionBorder: '#BEAF41',
    mentionBackground: '#383827',
    messageBox: '#363636',
    messageBoxInput: '#242424',
    blockQuoteBackground: '#11111166',
    accentColor: '#1AD4B2',
    accentColorForeground: '#000000',
    contentType: 'light',
    error: '#ED4245',
    pingColor: '#FBFF000F',
  },
  // "Solarized": {
  //     backgroundPrimary: '#001a20',
  //     backgroundSecondary: '#05252d',
  //     blockQuoteBackground: '#11111166',
  //     textPrimary: '#dddddd',
  //     textSecondary: '#888888',
  //     accentColor: '#1ad4b2',
  //     accentColorForeground: '#000000',
  //     contentType: 'light',
  //     buttonBorderWidth: 0,
  //     messageBoxBorderWidth: 0,
  //     generalBorderWidth: 0,
  //     buttonBorderColorActive: "#3333ff",
  //     statusOnline: "#3abf7e",
  //     statusIdle: "#f39f00",
  //     statusBusy: "#f84848",
  //     statusStreaming: "#977eff",
  //     statusOffline: "#a5a5a5",
  //     statusInvisible: "#a5a5a5",
  //     pingColor: "#f84848",
  //     pingColorForeground: "#ffffff"
  // },
  // "Vibrant Pink": {
  //     backgroundPrimary: '#f9bae9',
  //     backgroundSecondary: '#e99cd6',
  //     blockQuoteBackground: '#11111166',
  //     textPrimary: '#000000',
  //     textSecondary: '#555555',
  //     accentColor: '#1ad4b2',
  //     accentColorForeground: '#000000',
  //     contentType: 'dark',
  //     buttonBorderWidth: 0,
  //     messageBoxBorderWidth: 0,
  //     generalBorderWidth: 0,
  //     buttonBorderColorActive: "#3333ff",
  //     statusOnline: "#3abf7e",
  //     statusIdle: "#f39f00",
  //     statusBusy: "#f84848",
  //     statusStreaming: "#977eff",
  //     statusOffline: "#a5a5a5",
  //     statusInvisible: "#a5a5a5",
  //     pingColor: "#f84848",
  //     pingColorForeground: "#ffffff"
  // },
  AMOLED: {
    ...commonColours,
    backgroundPrimary: '#000000',
    backgroundSecondary: '#000000',
    foregroundPrimary: '#F6F6F6',
    foregroundSecondary: '#C8C8C8',
    foregroundTertiary: '#848484',
    blockQuoteBackground: '#111111',
    textPrimary: '#dddddd',
    textSecondary: '#888888',
    accentColor: '#1ad4b2',
    accentColorForeground: '#000000',
    contentType: 'light',
    buttonBorderColor: '#ffffff99',
    buttonBorderWidth: 1,
    mentionBorder: '#BEAF41',
    mentionBackground: '#383827',
    messageBoxInput: '#111111',
    messageBoxBorderColor: '#ffffff99',
    messageBoxBorderWidth: 1,
    generalBorderColor: '#ffffff22',
    generalBorderWidth: 1,
    buttonBorderColorActive: '#3333ff',
    pingColor: '#f84848',
    pingColorForeground: '#ffffff',
  },
};
export var currentTheme = themes['Dark'];
export var currentThemeName = 'Dark';

export var styles: any;
function refreshStyles() {
  styles = StyleSheet.create({
    outer: {
      flex: 1,
      backgroundColor: currentTheme.backgroundSecondary,
    },
    app: {
      flex: 1,
      backgroundColor: currentTheme.backgroundPrimary,
    },
    mainView: {
      flex: 1,
      backgroundColor: currentTheme.backgroundPrimary,
    },
    loginInput: {
      fontFamily: 'Inter',
      borderRadius: 8,
      padding: 3,
      paddingLeft: 10,
      paddingRight: 10,
      margin: 8,
      width: '80%',
      backgroundColor: currentTheme.backgroundSecondary,
      color: currentTheme.foregroundPrimary,
    },
    loggingInScreen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    flex: {
      flex: 1,
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    headerv2: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 4,
    },
    h2: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 4,
    },
    profileSubheader: {
      fontWeight: 'bold',
      color: currentTheme.foregroundSecondary,
      marginVertical: 5,
    },
    loadingHeader: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 30,
    },
    remark: {
      color: currentTheme.foregroundSecondary,
      textAlign: 'center',
      fontSize: 16,
      marginTop: 5,
      paddingHorizontal: 30,
    },
    beginningRemark: {
      color: currentTheme.foregroundSecondary,
      textAlign: 'left',
      fontSize: 16,
      marginTop: 5,
      paddingLeft: -20,
    },
    channelName: {
      flex: 1,
      fontWeight: 'bold',
    },
    link: {
      color: currentTheme.accentColor,
      textDecorationLine: 'underline',
      // fontWeight: 'bold',
    },
    leftView: {
      flex: 1,
      backgroundColor: currentTheme.backgroundSecondary,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    sheetBackground: {
      width: '100%',
      height: '70%',
      padding: 12,
      backgroundColor: currentTheme.backgroundSecondary,
      borderTopStartRadius: 16,
      borderTopEndRadius: 16,
    },
    textDefault: {
      color: currentTheme.foregroundPrimary,
    },
    message: {
      borderRadius: 4,
      borderLeftWidth: 3,
      borderStyle: 'solid',
      borderColor: currentTheme.backgroundPrimary,
      width: '100%',
      flex: 1,
      flexDirection: 'row',
      paddingTop: 2,
      paddingBottom: 2,
      paddingHorizontal: 2,
    },
    messageGrouped: {
      borderRadius: 4,
      borderLeftWidth: 3,
      borderStyle: 'solid',
      borderColor: currentTheme.backgroundPrimary,
      paddingLeft: 37,
      width: '100%',
      paddingTop: 2,
      paddingBottom: 2,
    },

    messageInner: {
      flex: 1,
      paddingLeft: 10,
    },
    messageAvatar: {
      width: 35,
      height: 35,
      borderRadius: 100000,
    },
    messageAvatarReply: {
      width: 15,
      height: 15,
      borderRadius: 100000,
    },
    messageUsernameReply: {
      marginHorizontal: 3,
    },
    typingBar: {
      height: 26,
      paddingLeft: 6,
      padding: 3,
      backgroundColor: currentTheme.backgroundSecondary,
      borderBottomColor: currentTheme.backgroundPrimary,
      borderBottomWidth: 1,
      flexDirection: 'row',
    },
    messageUsername: {
      fontWeight: 'bold',
    },
    serverButton: {
      borderRadius: 5000,
      width: 48,
      height: 48,
      margin: 4,
      backgroundColor: currentTheme.backgroundPrimary,
      overflow: 'hidden',
    },
    serverButtonInitials: {
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: '30%',
    },
    serverSettingsInitials: {
      borderRadius: 5000,
      justifyContent: 'center',
      alignItems: 'center',
      width: 80,
      height: 80,
      backgroundColor: currentTheme.backgroundSecondary,
      overflow: 'hidden',
    },
    serverIcon: {
      width: 48,
      height: 48,
    },
    serverList: {
      width: 60,
      flexShrink: 1,
      backgroundColor: currentTheme.background,
      paddingVertical: 4,
    },
    channelList: {
      flexGrow: 1000,
      flex: 1000,
    },
    channelButton: {
      marginHorizontal: 8,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    button: {
      padding: 10,
      paddingHorizontal: 16,
      borderRadius: 8,
      backgroundColor: currentTheme.headerSecondary,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    buttonSecondary: {
      padding: 10,
      paddingHorizontal: 16,
      borderRadius: 8,
      backgroundColor: currentTheme.backgroundPrimary,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    settingsEntry: {
      flexDirection: 'row',
      padding: 8,
      marginVertical: 4,
      backgroundColor: currentTheme.backgroundSecondary,
      borderRadius: 4,
      alignItems: 'center',
    },
    channelButtonSelected: {
      backgroundColor: currentTheme.hover,
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 30,
      height: 30,
      marginRight: 8,
    },
    messagesView: {
      padding: 10,
      paddingHorizontal: 5,
      flex: 1,
    },
    messageBoxInner: {
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: 50,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    messageBoxOuter: {
      backgroundColor: currentTheme.messageBox,
      overflow: 'hidden',
    },
    sendButton: {
      marginStart: 8,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderRadius: 8,
      backgroundColor: currentTheme.accentColor,
    },
    headerIcon: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    messageBox: {
      color: currentTheme.foregroundPrimary,
      paddingLeft: 10,
      padding: 5,
      flex: 1,
      fontFamily: 'Open Sans',
      borderRadius: 8,
    },
    serverName: {
      marginVertical: 10,
      maxWidth: '90%',
      fontSize: 18,
      fontWeight: 'bold',
    },
    channelHeader: {
      height: 50,
      backgroundColor: currentTheme.headerPrimary,
      alignItems: 'center',
      paddingLeft: 16,
      padding: 10,
      flexDirection: 'row',
    },
    messageContentReply: {
      height: 20,
      marginLeft: 4,
    },
    actionTile: {
      height: 40,
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: currentTheme.backgroundPrimary,
      borderRadius: 8,
      paddingLeft: 10,
      paddingRight: 10,
      marginVertical: 4,
    },
    messageBoxBar: {
      padding: 4,
      borderBottomColor: currentTheme.backgroundPrimary,
      borderBottomWidth: 1,
      flexDirection: 'row',
    },
    attachmentsBar: {
      padding: 8,
      borderBottomColor: currentTheme.backgroundPrimary,
      borderBottomWidth: 1,
      flexDirection: 'column',
    },
    repliedMessagePreviews: {
      paddingTop: 4,
    },
    timestamp: {
      fontSize: 12,
      color: currentTheme.foregroundTertiary,
      position: 'relative',
      top: 2,
      left: 2,
    },
    emoji: {
      objectFit: 'contain',
      height: 14,
      width: 14,
      marginRight: 5,
      marginLeft: 1,
      display: 'block',
      position: 'absolute',
    },
    iwbContainer:  {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '100%',
    },
    iwbInput: {
      fontFamily: 'Open Sans',
      flex: 1,
      borderRadius: 8,
      backgroundColor: currentTheme.backgroundSecondary,
      padding: 6,
      paddingHorizontal: 10,
      color: currentTheme.foregroundPrimary,
    }
  });
}
export function setTheme(themeName: string) {
  currentThemeName = themeName;
  currentTheme = themes[themeName] ?? themes.Dark;
  refreshStyles();
}
setTheme('Dark');
