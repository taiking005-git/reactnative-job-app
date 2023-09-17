import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './nearbyjobCard.style'
import checkImageUrl from '../../../utils'

const Nearbyjobs = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: checkImageUrl(job.employer_logo) ? job.employer_logo : "load" }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text
          style={styles.jobName}
          numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType} numberOfLines={1}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Nearbyjobs