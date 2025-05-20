import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';
import styles from './profilestyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeftLong,
  faCircle,
  faCommentDots,
  faTaxi,
  faChevronRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons/faIndianRupeeSign';
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons/faArrowRightLong';

const Profile: React.FC = () => {
  const profileImage: ImageSourcePropType = require('../assets/profile.png');
  const icon: ImageSourcePropType = require('../assets/icon.png');

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Profile  */}

        <View style={styles.profileHeader}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesomeIcon icon={faArrowLeftLong} size={30} color="white" />
            <Text style={styles.profileTitle}>Profile</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <FontAwesomeIcon icon={faCommentDots} size={20} color="white" />
            <Text style={styles.buttonText}>support</Text>
          </TouchableOpacity>
        </View>

        {/*  Info */}
        <View style={styles.userInfo}>
          <Image source={profileImage} style={styles.profileImage} />
          <View>
            <Text style={styles.username}>andaz Kumar</Text>
            <Text style={styles.memberSince}>member since Dec, 2020</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Image source={icon} style={styles.editButton} />
          </TouchableOpacity>
        </View>

      
      

        <TouchableOpacity style={styles.card}>
          <View style={styles.iconCard}>
            <FontAwesomeIcon icon={faTaxi} size={17} color="#fff" />
          </View>

          {/* Text Section */}
          <View style={styles.textSection}>
            <Text style={styles.subtitle}>
              get to know your vehicles, inside out
            </Text>
            <View style={styles.titleRow}>
              <Text style={styles.cardSubtitle}>CRED garage </Text>
              <FontAwesomeIcon
                icon={faArrowRightLong}
                size={30}
                color="white"
              />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.infoRow}>
          <TouchableOpacity style={styles.iconCircle}>
            <FontAwesomeIcon icon={faArrowLeft} size={12} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.infoLabel}>
            credit score
            <Text style={styles.refreshText}>.REFRESH AVAILABLE</Text>
          </Text>
          <Text style={styles.infoValue}>757</Text>
          <Text style={styles.arrow}>→</Text>
        </View>
        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <TouchableOpacity style={styles.iconCircle}>
            <FontAwesomeIcon icon={faIndianRupeeSign} size={12} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.infoLabel}>lifetime cashback</Text>
          <Text style={styles.infoValue}>₹3</Text>
          <Text style={styles.arrow}>→</Text>
        </View>
        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <TouchableOpacity style={styles.iconCircle}>
            <FontAwesomeIcon icon={faChevronRight} size={12} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.infoLabel}>bank balance</Text>
          <Text style={styles.infoValue}>check</Text>
          <Text style={styles.arrow}>→</Text>
        </View>
      </View>

      <View style={styles.reward}>
        <Text style={styles.sectionTitle}>YOUR REWARDS AND BENEFITS</Text>

        <View style={styles.rewardBox}>
          <View style={{flex: 1}}>
            <Text style={styles.rewardLabel}>cashback balance</Text>
            <Text style={styles.rewardValue}>₹0</Text>
          </View>
          <Text style={styles.leftarrow}>{'>'}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.rewardBox}>
          <View style={{flex: 1}}>
            <Text style={styles.rewardLabel}>coins</Text>
            <Text style={styles.rewardValue}>26,46,583</Text>
          </View>
          <Text style={styles.leftarrow}>{'>'}</Text>
        </View>
        <View style={styles.divider} />

        <View style={styles.rewardBox}>
          <View style={{flex: 1}}>
            <Text style={styles.rewardLabel}>win upto Rs 1000</Text>
            <Text style={styles.rewardValue}>refer and earn</Text>
          </View>
          <Text style={styles.leftarrow}>{'>'}</Text>
        </View>

        {/* Transactions */}
        <Text style={styles.sectionTitle}>TRANSACTION & SUPPORT</Text>

        <View style={styles.rewardBox}>
          <Text style={styles.rewardLabel}>all transactions</Text>
          <Text style={styles.leftarrow}>{'>'}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
