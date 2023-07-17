import { Box } from "@chakra-ui/react";
import DefaultLayout from "@/features/Layouts/DefaultLayout/DefaultLayout";
import { logo } from "@/features/common/modules/Navigation/navigationConsts";
import ApplicationForm from "@/features/common/modules/ApplicationForm/ApplicationForm";



const careers = () => {
  return (
    <DefaultLayout>
        <Box backgroundColor="#f7f8f9" padding={{ base: "3rem", sm:"15rem"}}>
            <Box>
                <img src={logo} alt="Adron" width="90px" height="90px" />
                <Box>

                </Box>
            </Box>
            <Box>
                <ApplicationForm />
            </Box>
        </Box>
    </DefaultLayout>
  )
}

export default careers