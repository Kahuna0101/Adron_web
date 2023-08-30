import { Box } from "@chakra-ui/react";
import DefaultLayout from "@/features/Layouts/DefaultLayout/DefaultLayout";
import ApplicationForm from "@/features/common/modules/ApplicationForm/ApplicationForm";

// Not Implemented Yet, but the page is there

const careers = () => {
  return (
    <DefaultLayout>
        <Box backgroundColor="#f7f8f9" padding={{ base: "3rem", sm:"15rem"}}>
            <Box>
                <ApplicationForm />
            </Box>
        </Box>
    </DefaultLayout>
  )
}

export default careers