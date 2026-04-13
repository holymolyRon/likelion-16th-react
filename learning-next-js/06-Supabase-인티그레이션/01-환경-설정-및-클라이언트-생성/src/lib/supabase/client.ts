import { createBrowserClient } from '@supabase/ssr'
import { supabaseConfig } from './config'

// 브라우저용 Supabase Client 객체 생성 함수
export const createClient = () => {
  return createBrowserClient(supabaseConfig.url, supabaseConfig.key)
}
