"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';

const initRepos = { repositories: [], isLoading: false, error: '' }
export const useGithub = () => {
  const [repoState, setRepoState] = useState<typeof initRepos>(initRepos)

  useEffect(() => {
    const controller = new AbortController()
    const fetchRepos = async () => {
      setRepoState(prev => ({ ...prev, isLoading: true }))
      try{
        const response = await axios.get('https://api.github.com/user/repos', {
          signal: controller.signal,
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
          },
        });
        setRepoState(prev => ({ ...prev, repositories: response.data }));
      }
      catch(error: unknown){
        const errorMsg = error as { message: string }
        setRepoState(prev => ({ ...prev, error: errorMsg?.message }))
      }
      finally{
        setRepoState(prev => ({ ...prev, isLoading: false }))
      }
    };
    fetchRepos()
    return () => {
      controller.abort()
    }
  }, [])
  return repoState
}