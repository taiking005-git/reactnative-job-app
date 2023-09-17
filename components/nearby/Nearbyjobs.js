import { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native"
import { useRouter } from 'expo-router';

import styles from './nearbyjobs.style';
import { COLORS } from '../../constants';

import useFetch from '../../hook/useFetch';
import NearbyjobCard from '../common/cards/NearbyjobCard';


const Nearbyjobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(null);
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const loadData = async () => {
    const result = await useFetch("search", {
      query: "React developer",
      num_pages: "1"
    });
    setData(result.data)
    setIsLoading(result.isLoading)
    setError(result.error)
  }

  loadData()


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity  >
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
              data?.map((job) => (
                <NearbyjobCard
                  job={job}
                  key={`nearby-job-${job?.job_id}`}
                  handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
                />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs