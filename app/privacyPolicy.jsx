import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { ExternalLink } from '@/components/ExternalLink';

import { Collapsible } from '@/components/Collapsible';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function PrivacyPolicy() {
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
        <ThemedText type="title">Privacy Policy</ThemedText>
        <HelloWave />
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Effective Date: 05/24/2024</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Introduction</ThemedText>
        <ThemedText>
        Henza ("Henza," "we," "us," or "our")  <ThemedText type="defaultSemiBold">is a health innovation platform committed to improving access to healthcare services in Africa. </ThemedText> This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our mobile application,  

          <ThemedText type="defaultSemiBold">
           Henza (the "App").
          </ThemedText>
       
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Information We Collect
</ThemedText>
        <ThemedText>
        We collect the following information from you:
        </ThemedText>
        <Collapsible title="Account Information">
        <ThemedText>
        When you create an account, we collect your 
          <ThemedText type="defaultSemiBold"> username, email address, </ThemedText> and{' '}
          <ThemedText type="defaultSemiBold"> phone number.</ThemedText>
        </ThemedText>
      
      </Collapsible>
      <Collapsible title="Location Information">
        <ThemedText>
        We may collect your location information with your consent to provide features like
          <ThemedText type="defaultSemiBold">finding nearby healthcare providers</ThemedText> or{' '}
          <ThemedText type="defaultSemiBold">emergency services. </ThemedText>
        </ThemedText>
        <ThemedText>
        You can set your location <ThemedText type="defaultSemiBold">radius to a maximum of 5km </ThemedText>{' '}
        for privacy reasons.
        </ThemedText>
     
      </Collapsible>
      <Collapsible title="Health Information">
        <ThemedText>
        You may choose to provide us with health information, such as
          <ThemedText type="defaultSemiBold"> medical history, symptoms, medications, </ThemedText> and{' '}
          <ThemedText type="defaultSemiBold"> responses to the Emed Self Diagnosis AI tool.
</ThemedText>
        </ThemedText>
     
      
      </Collapsible>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Use of Information</ThemedText>
        <ThemedText>We use the information we collect to:
</ThemedText>
      
        <ThemedText>
        Provide and improve the App and its features, including connecting you with 
          <ThemedText type="defaultSemiBold"> healthcare providers </ThemedText> and{' '}
          <ThemedText type="defaultSemiBold"> services.
</ThemedText>
        </ThemedText>

        <ThemedText>
        Facilitate communication between you and healthcare providers through
          <ThemedText type="defaultSemiBold"> consultations, appointment scheduling, </ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">medication reminders.
</ThemedText>
        </ThemedText>
        <ThemedText>
        Verify your identity and ensure the security of your account.

         
        </ThemedText>
        <ThemedText>
        Send you important information about the App, including 
          <ThemedText type="defaultSemiBold"> updates, security alerts,  </ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">support messages.
.
</ThemedText>
        </ThemedText>
        <ThemedText>
        Personalize your experience within the App and provide relevant health information.

         
        </ThemedText>

        <ThemedText>
        Generate reports for participating African countries based on{' '}
          <ThemedText type="defaultSemiBold">anonymized patient data (no names included) </ThemedText> to improve healthcare access and outcomes on a national level.
{' '}
        
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Data Sharing</ThemedText>
        <ThemedText>We will not share your personal information with third parties without your consent, except in the following limited circumstances:

</ThemedText>
      
        <ThemedText>
        With service providers who help us operate the App, such as 
          <ThemedText type="defaultSemiBold"> data storage providers, communication platforms, </ThemedText> and{' '}
          <ThemedText type="defaultSemiBold"> payment processors. 
</ThemedText>These providers are bound by contractual obligations to keep your information confidential.

        </ThemedText>

        <ThemedText>
        With healthcare providers you connect with through the App to facilitate your care.
         
        </ThemedText>
        <ThemedText>
        To comply with legal or regulatory requirements, such as responding to court orders or subpoenas.

         
        </ThemedText>
        <ThemedText>
        In the event of 
          <ThemedText type="defaultSemiBold"> a merger, acquisition,  </ThemedText> or {' '}
          <ThemedText type="defaultSemiBold">asset sale.

</ThemedText>
        </ThemedText>
       
        
      </ThemedView>



      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Data Security
</ThemedText>
        <ThemedText>
        We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. This includes using encryption, firewalls, and access controls. 
        
          <ThemedText type="defaultSemiBold">However, no security measures are perfect, and we cannot guarantee the security of your information.
</ThemedText>.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Your Choices</ThemedText>

        <ThemedText  type="defaultSemiBold">You have the following choices regarding your information:


</ThemedText>
        <ThemedText>
        Access and update your account information in the App settings.

        </ThemedText>
        <ThemedText>
        Request to delete your information by contacting us at    <ThemedText  type="defaultSemiBold">Henzaapp@gmail.com.

</ThemedText> We will anonymize your data in reports already generated.

        </ThemedText>
        <ThemedText>
        Manage your location permissions in your device settings.


        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Children's Privacy</ThemedText>
        <ThemedText>
        Our App is not intended for {' '}
          <ThemedText type="defaultSemiBold">children under the age of 18. </ThemedText> 
          <ThemedText type="defaultSemiBold">We do not knowingly collect personal information from children under this age.
</ThemedText> 
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Changes to this Privacy Policy</ThemedText>
        <ThemedText>
        We may update this Privacy Policy from time to time.

          <ThemedText type="defaultSemiBold"> We will notify you of any changes by posting the new Privacy Policy on the App.</ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Contact Us</ThemedText>
        <ThemedText>
        If you have any questions about this Privacy Policy, please contact us at
          <ThemedText type="defaultSemiBold"> Henzaapp@gmail.com.
</ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 370,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
