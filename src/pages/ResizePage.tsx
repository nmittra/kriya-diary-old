import { Box, Container, Heading, VStack, useColorModeValue } from '@chakra-ui/react'
import { ImageUploader } from '../components/ImageUploader'
import { ImageEditor } from '../components/ImageEditor'
import { useState } from 'react'
import { Header } from '../components/Header'

interface ImageFile {
  file: File
  preview: string
}

export function ResizePage() {
  const [selectedImage, setSelectedImage] = useState<ImageFile | null>(null)

  const bg = useColorModeValue('gray.50', 'gray.800')

  return (
    <Box bg={bg} minH="100vh">
      <Header />
      <Box py={12}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="center" w="full">
          <Heading as="h1" size="xl" textAlign="center" mb={4}>
            Resize Your Images
          </Heading>
          {!selectedImage ? (
            <ImageUploader setSelectedImage={setSelectedImage} />
          ) : (
            <ImageEditor
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              defaultTab="resize"
            />
          )}
        </VStack>
      </Container>
      </Box>
    </Box>
  )
}