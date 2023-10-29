import { Heading, Center, Text, Box, Image, ScrollView } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
    // Get the params
    const params = route.params.item;

    return (
        <>
            <Header title={"News"} withBack="true" />
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
            <Image
                source={{ uri: params.image }}
                resizeMode="contain"
                alt="Image Data"
                w="full"
                h="274.3"
            />      
            <Box p={"4"} bg="coolGray.200" >
                <Text fontSize={"sm"} mb={"4"}>{params.date}</Text>
                <Heading 
                    lineHeight={30} 
                    fontSize={28} 
                    mb={"5"}
                    >
                        {params.title}
                </Heading>
                <Box borderTopColor={"coolGray.300"} borderTopWidth={1}>
                    <Text fontSize={"md"} mt={"5"}>{params.content}</Text>
                </Box>
            </Box>
        </ScrollView>
        </>
    );
};

export default NewsDetail;