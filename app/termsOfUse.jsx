

import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Text, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function TermsOfUse() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    headerImage={
      <Image
        source={require('@/assets/images/medical1.png')}
        style={styles.reactLogo}
        
      />
    }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Terms of Use</ThemedText>
      </ThemedView>
      <ThemedText>Effective Date:  05/24/2024
.</ThemedText>
      <Collapsible title="Introduction">
        <ThemedText>
        These Terms of Use ("Terms") govern your access to and use of the Henza mobile application (the "App"), a health innovation platform developed by Dangwe Emeds Limited  ("Henza," "we," "us," or "our"). 
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">By accessing or using the App, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use the App.
</ThemedText>{' '}
          s
        </ThemedText>
       
      </Collapsible>
      <Collapsible title="Eligibility">
        <ThemedText>
        You must be at least 18 years old to use the App. By using the App, you represent and warrant that you are of legal age to enter into a binding agreement and have the legal capacity to use the App in accordance with these Terms.

        </ThemedText>
      </Collapsible>
      <Collapsible title="User Accounts">
        <ThemedText>
        You may create an account on the App ("Account") by providing your username, email address, phone number, and password. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your Account.  <ThemedText type="defaultSemiBold"> You agree to immediately notify us of any unauthorized use of your Account or any other security breach.
</ThemedText> a
        </ThemedText>
        
      </Collapsible>
      <Collapsible title="Use of the App">
        
           <ThemedText>The App is intended to connect you with healthcare providers and services in Africa. You agree to use the App for lawful purposes only and in accordance with these Terms. You agree not to use the App:
</ThemedText>
<Text></Text>

<ThemedText> In any way that violates any applicable law or regulation.
</ThemedText><Text></Text>
<ThemedText> To harm, threaten, abuse, or harass others.
</ThemedText><Text></Text>
      
<ThemedText> To interfere with the operation of the App or any other user's enjoyment of the App.
</ThemedText><Text></Text>
      
<ThemedText> To impersonate any person or entity.
</ThemedText><Text></Text>
      
<ThemedText> To transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, hateful, or racially or ethnically offensive.
</ThemedText><Text></Text>
      
<ThemedText>To interfere with or disrupt the servers or networks that provide the App.
 </ThemedText><Text></Text>
      
<ThemedText> To gain unauthorized access to the App or any other user's Account.
</ThemedText>
      
      
      </Collapsible>
      <Collapsible title="Content">
        <ThemedText>
        The App may contain content provided by Henza, healthcare providers, and other users ("Content"). You understand that the Content is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. You agree to rely on the advice of a qualified healthcare professional for any medical questions you may have.
        </ThemedText>
       
      </Collapsible>
      <Collapsible title="Disclaimers">
        <ThemedText>
        THE APP IS PROVIDED "AS IS" AND WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. Henza DISCLAIMS ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. Henza DOES NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE APP IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.

        </ThemedText>
      
      </Collapsible>
      <Collapsible title="Limitation of Liability">
        <ThemedText>
        Henza SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE APP, EVEN IF Henza HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </ThemedText>
        
      </Collapsible>
      <Collapsible title="Indemnification">
        <ThemedText>
        You agree to indemnify and hold harmless Henza, its officers, directors, employees, agents, and licensors from and against any and all claims, losses, expenses, liabilities, and damages (including reasonable attorneys' fees) arising out of or related to your use of the App or your violation of these Terms.

        </ThemedText>
      </Collapsible>
      <Collapsible title="Termination">
        <ThemedText>
        We may terminate or suspend your access to the App at any time, for any reason, and without notice. You may also terminate your Account at any time.

        </ThemedText>
        
      </Collapsible>
      <Collapsible title="Governing Law">
        <ThemedText>
        These Terms shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions.

        </ThemedText>
       
      </Collapsible>
      <Collapsible title="Dispute Resolution">
        <ThemedText>
        Any dispute arising out of or relating to these Terms shall be resolved by arbitration.

        </ThemedText>
        
      </Collapsible>
      <Collapsible title="Entire Agreement">
        <ThemedText>
        These Terms constitute the entire agreement between you and Henza regarding your use of the App.
        </ThemedText>
        
      </Collapsible>
      <Collapsible title="Severability">
        <ThemedText>
        If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.

        </ThemedText>
        
      </Collapsible>
      <Collapsible title="Updates to the Terms">
        <ThemedText>
        We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on the App. You are advised to review these Terms periodically for any changes. Your continued use of the App after the posting of any revised Terms constitutes your acceptance of such revised Terms.

        </ThemedText>
       
      </Collapsible>
      <Collapsible title="Contact Us">
        <ThemedText>
        If you have any questions about these Terms
        </ThemedText>
        
      </Collapsible>
     
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: 250,
    width: 370,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
