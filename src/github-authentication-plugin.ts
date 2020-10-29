
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';

export function start(context: theia.PluginContext) {
    let session: theia.AuthenticationSession | undefined;
    const onDidChangeSessions = new theia.EventEmitter<theia.AuthenticationProviderAuthenticationSessionsChangeEvent>();
    theia.authentication.registerAuthenticationProvider({
        id: 'github',
        label: 'GitHub',
        supportsMultipleAccounts: false,
        onDidChangeSessions: onDidChangeSessions.event,
        getSessions: async () => {
            if (session) {
                return [session];
            } else {
                return [];
            }
        },
        login: async (scopeList: string[]) => {
            session = {
                id: 'github-session',
                accessToken: '2b1f4a9a093fc56187087a03388ffbbbbc8abd3a',
                account: { label: 'githubUser', id: 'githubUserId' },
                scopes: scopeList
            };
            onDidChangeSessions.fire({ added: [session.id], removed: [], changed: [] });
            return session;
        },
        logout: async (id: string) => {
            session = undefined;
            onDidChangeSessions.fire({ added: [], removed: [id], changed: [] });
        }
    }
    );

}

export function stop() {

}
