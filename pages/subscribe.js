import DefaultLayout from '@/features/Layouts/DefaultLayout/DefaultLayout'
import SubscriptionForm from '@/features/common/modules/SubscriptionForm/SubscriptionForm'
import { Box } from '@chakra-ui/react'
import React from 'react'

const subscribe = () => {
  return (
    <DefaultLayout>
          <Box backgroundColor="#f7f8f9" padding={{ base: "3rem", sm:"15rem"}}>
            <Box>

            </Box>
            <Box>
                <SubscriptionForm />
            </Box>
        </Box>
    </DefaultLayout>
  )
}

export default subscribe