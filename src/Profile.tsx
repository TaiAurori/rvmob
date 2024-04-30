import {observer} from 'mobx-react-lite';
import React from 'react';
import {client, app} from './Generic';
import {currentTheme} from './Theme';
import {Pressable, View} from 'react-native';
import {Server, User, Channel} from 'revolt.js';
import {Text, Username} from './components/common/atoms';
import {Image} from '@rvmob/crossplat/Image';
import {DEFAULT_MAX_SIDE} from './lib/consts';
import {getColour} from './lib/utils';

type AvatarProps = {
  channel?: Channel;
  user?: User;
  server?: Server;
  status?: boolean;
  size?: number;
  backgroundColor?: string;
  masquerade?: string;
  pressable?: boolean;
};

export const Avatar = observer(
  ({
    channel,
    user,
    server,
    status,
    size,
    backgroundColor,
    masquerade,
    pressable,
  }: AvatarProps) => {
    let memberObject =
      server && user
        ? client.members.getKey({
            server: server?._id,
            user: user?._id,
          })
        : null;
    let statusColor;
    let statusScale = 2.7;
    if (status) {
      const s = user?.online ? user.status?.presence || 'Online' : 'Offline';
      statusColor = currentTheme[`status${s}`];
    }
    let Container = pressable
      ? ({children}) => (
          <Pressable
            onPress={() => app.openImage(memberObject?.avatar || user?.avatar)}>
            {children}
          </Pressable>
        )
      : View;
    if (user) {
      return (
        <Container>
          <Image
            source={{
              uri:
                (masquerade
                  ? masquerade
                  : server &&
                    memberObject?.generateAvatarURL &&
                    memberObject?.generateAvatarURL()
                  ? memberObject?.generateAvatarURL()
                  : user?.generateAvatarURL()) +
                '?max_side=' +
                DEFAULT_MAX_SIDE,
            }}
            style={{width: size || 35, height: size || 35, borderRadius: 10000}}
          />
          {status ? (
            <View
              style={{
                width: Math.round(size / statusScale),
                height: Math.round(size / statusScale),
                backgroundColor: statusColor,
                borderRadius: 10000,
                marginTop: -Math.round(size / statusScale),
                left: size - Math.round(size / statusScale),
                borderWidth: Math.round(size / 20),
                borderColor: backgroundColor || currentTheme.backgroundPrimary,
              }}
            />
          ) : null}
          {masquerade && app.settings.get('ui.messaging.showMasqAvatar') ? (
            <Image
              style={{
                width: Math.round(size / statusScale),
                height: Math.round(size / statusScale),
                marginBottom: -Math.round(size / statusScale),
                bottom: size,
                borderRadius: 10000,
                borderWidth: Math.round(size / 30),
                borderColor: backgroundColor || currentTheme.backgroundPrimary,
              }}
              source={{
                uri:
                  server &&
                  memberObject?.generateAvatarURL &&
                  memberObject?.generateAvatarURL()
                    ? memberObject?.generateAvatarURL()
                    : user?.generateAvatarURL(),
              }}
            />
          ) : null}
        </Container>
      );
    }
    if (channel) {
      return (
        <View>
          {channel?.generateIconURL() ? (
            <Image
              source={{
                uri:
                  channel?.generateIconURL() + '?max_side=' + DEFAULT_MAX_SIDE,
              }}
              style={{
                width: size || 35,
                height: size || 35,
                borderRadius: 10000,
              }}
            />
          ) : null}
        </View>
      );
    }
    return <></>;
  },
);

type MiniProfileProps = {
  user?: User;
  scale?: number;
  channel?: Channel;
  server?: Server;
  color?: string;
};

export const MiniProfile = observer(
  ({user, scale, channel, server, color}: MiniProfileProps) => {
    if (user) {
      return (
        <View style={{flexDirection: 'row'}} key={`mini-profile-${user._id}`}>
          <Avatar
            key={`mini-profile-${user._id}-avatar`}
            user={user}
            server={server}
            size={35 * (scale || 1)}
            status
          />
          <View
            key={`mini-profile-${user._id}-text-wrapper`}
            style={{marginLeft: 10 * (scale || 1)}}>
            <Username
              user={user}
              server={server}
              color={color || currentTheme.foregroundPrimary}
              size={14 * (scale || 1)}
            />
            <Text
              colour={color || currentTheme.foregroundPrimary}
              style={{
                marginTop: -3 * (scale || 1),
                fontSize: 14 * (scale || 1),
              }}>
              {user.online
                ? user.status?.text || user.status?.presence || 'Online'
                : 'Offline'}
            </Text>
          </View>
        </View>
      );
    }

    if (channel) {
      return (
        <View style={{flexDirection: 'row'}}>
          <Avatar channel={channel} size={35 * (scale || 1)} />
          <View style={{marginLeft: 10 * (scale || 1)}}>
            <Text
              colour={color || currentTheme.foregroundPrimary}
              style={{
                fontSize: 14 * (scale || 1),
                fontWeight: 'bold',
              }}>
              {channel.name}
            </Text>
            <Text
              colour={color || currentTheme.foregroundPrimary}
              style={{
                marginTop: -3 * (scale || 1),
                fontSize: 14 * (scale || 1),
              }}>
              {channel?.recipient_ids?.length} members
            </Text>
          </View>
        </View>
      );
    }

    return <></>;
  },
);

type RoleViewProps = {
  server: Server;
  user: User;
};

export const RoleView = observer(({server, user}: RoleViewProps) => {
  let memberObject = client.members.getKey({
    server: server?._id,
    user: user?._id,
  });

  let roles = memberObject?.roles?.map(r => server.roles![r]) || null;
  return memberObject && roles ? (
    <>
      <Text type={'profile'}>ROLES</Text>
      <View
        key={`roleview-${server._id}-container`}
        style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {roles.map((r, i, a) => (
          <View
            key={`roleview-${server._id}-${r.name}-${Math.random()}`}
            style={{
              flexDirection: 'row',
              padding: 6,
              paddingStart: 8,
              paddingEnd: 8,
              marginStart: i === 0 ? 0 : 4,
              marginEnd: i === a.length - 1 ? 0 : 4,
              backgroundColor: currentTheme.backgroundPrimary,
              borderRadius: 8,
            }}>
            <View
              key={`roleview-${server._id}-${r.name}-colour`}
              style={{
                borderRadius: 10000,
                backgroundColor: r.colour
                  ? getColour(r.colour)
                  : currentTheme.foregroundSecondary,
                height: 16,
                width: 16,
                margin: 2,
                marginRight: 6,
              }}
            />
            <Text>{r.name}</Text>
          </View>
        ))}
      </View>
    </>
  ) : null;
});
