import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Pressable } from "react-native"
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../constants'
import useFetch from '../../hook/useFetch'
import PopularjJobCard from './../common/cards/PopularjJobCard';


const Popularjobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(null);
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleCardPress = (item) => {
    setSelectedJob(item)
    router.navigate("JobDetails", { job: item })
  }

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
        <Text style={styles.headerTitle}>Popular jobs</Text>
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
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularjJobCard item={item} selectedJob={selectedJob} />
            )}
            horizontal
            keyExtractor={item => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs