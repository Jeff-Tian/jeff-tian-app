import * as WebBrowser from 'expo-web-browser';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../constants/Colors';
import {MonoText} from './StyledText';
import {Text, View} from './Themed';

export default function OnlineVersionInfo({url}: { url: string }) {
    return (
        <View>
            <View style={styles.helpContainer}>
                <TouchableOpacity onPress={() => handleHelpPress(url)} style={styles.helpLink}>
                    <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
                        Tap here to check online versions: ${url}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function handleHelpPress(url: string) {
    WebBrowser.openBrowserAsync(url).then();
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
    },
});
