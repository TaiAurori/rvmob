import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';

import BottomSheetCore from '@gorhom/bottom-sheet';
import {useBackHandler} from '@react-native-community/hooks';
import FastImage from 'react-native-fast-image';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {Member, Server} from 'revolt.js';

import {GeneralAvatar, app, client, setFunction} from '../../Generic';
import {SPECIAL_SERVERS} from '../../lib/consts';
import {currentTheme, styles} from '../../Theme';
import {ContextButton, CopyIDButton, Text} from '../common/atoms';
import {BottomSheet} from '../common/BottomSheet';
import {MarkdownView} from '../common/MarkdownView';

const Image = FastImage;

export const ServerInfoSheet = observer(() => {
  const [server, setServer] = React.useState(null as Server | null);
  const [members, setMembers] = React.useState(null as Member[] | null);

  const sheetRef = useRef<BottomSheetCore>(null);

  useBackHandler(() => {
    if (server) {
      sheetRef.current?.close();
      return true;
    }

    return false;
  });

  setFunction('openServerContextMenu', async (s: Server | null) => {
    if (s !== server) {
      setMembers(null);
    }
    setServer(s);
    s ? sheetRef.current?.expand() : sheetRef.current?.close();
  });

  useEffect(() => {
    async function fetchMembers() {
      if (!server || server._id === SPECIAL_SERVERS.lounge.id) {
        return;
      }
      // const start = new Date().getTime();
      // console.log(`[SERVERINFOSHEET] Fetching members... (${start})`);
      const m = await server.fetchMembers();
      // const mid = new Date().getTime();
      // console.log(`[SERVERINFOSHEET] Fetched members (${mid})`);
      setMembers(m.members);
      // const end = new Date().getTime();
      // console.log(`[SERVERINFOSHEET] Set members (${end})`);
    }
    fetchMembers();
  }, [server]);

  return (
    <BottomSheet sheetRef={sheetRef}>
      <View style={{paddingHorizontal: 16}}>
        {!server ? (
          <></>
        ) : (
          <>
            <View style={{justifyContent: 'center'}}>
              {server.banner ? (
                <Image
                  source={{uri: server.generateBannerURL()}}
                  style={{width: '100%', height: 110, marginBottom: 4}}
                />
              ) : null}
              {server.icon ? (
                <GeneralAvatar attachment={server.icon} size={72} />
              ) : null}
              <Text
                type={'header'}
                style={{
                  marginBottom: 0,
                  fontSize: 24,
                }}>
                {server.name}
              </Text>
              <Text
                colour={currentTheme.foregroundSecondary}
                style={{
                  marginVertical: 4,
                }}>
                {server._id === SPECIAL_SERVERS.lounge.id
                  ? 'Member count disabled for this server'
                  : members
                  ? `${members.length} ${
                      members.length === 1 ? 'member' : 'members'
                    }`
                  : 'Fetching member count...'}
              </Text>
              {server.description ? (
                <View
                  style={{
                    backgroundColor: currentTheme.background,
                    padding: 8,
                    borderRadius: 8,
                  }}>
                  <MarkdownView
                    style={{
                      color: currentTheme.foregroundSecondary,
                      fontSize: 16,
                      textAlign: 'center',
                    }}>
                    {server.description}
                  </MarkdownView>
                </View>
              ) : null}
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {server.havePermission("ManageServer") ? (<ContextButton
                    key={'server-ctx-menu-settings'}
                    onPress={() => {
                      app.openServerSettings(server);
                    }}>
                    <View style={styles.iconContainer}>
                      <MaterialIcon
                        name={"settings"}
                        size={20}
                        color={currentTheme.foregroundPrimary}
                      />
                    </View>
                    <Text>Server Settings</Text>
                  </ContextButton>) : null}
              {app.settings.get('ui.showDeveloperFeatures') ? (
                <CopyIDButton id={server._id} />
              ) : null}
              {server.owner !== client.user?._id ? (
                <>
                <ContextButton
                    key={'server-ctx-menu-report'}
                    onPress={() => {
                      app.openReportMenu({object: server, type: 'Server'});
                      app.openServerContextMenu(null);
                    }}>
                    <View style={styles.iconContainer}>
                      <MaterialIcon
                        name="flag"
                        size={20}
                        color={currentTheme.error}
                      />
                    </View>
                    <Text colour={currentTheme.error}>Report Server</Text>
                  </ContextButton>
                  <ContextButton
                    key={'server-ctx-menu-leave'}
                    onPress={async () => {
                      app.openServer();
                      app.openServerContextMenu(null);
                      server.delete();
                    }}>
                    <View style={styles.iconContainer}>
                      <MaterialIcon
                        name="exit-to-app"
                        size={20}
                        color={currentTheme.error}
                      />
                    </View>
                    <Text colour={currentTheme.error}>Leave Server</Text>
                  </ContextButton>
                </>
              ) : null}
            </View>
          </>
        )}
      </View>
    </BottomSheet>
  );
});
