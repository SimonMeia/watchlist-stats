import type { Movie } from '@/types/movie'
import { ref, type Ref } from 'vue'

export const movies: Ref<Movie[]> = ref([])

export const selectedYear: Ref<string> = ref('')
