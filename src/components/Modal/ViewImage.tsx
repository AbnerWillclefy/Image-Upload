import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={0}>
          <Image
            src={imgUrl}
            alt="Imagem"
            w="100%"
            maxW="900px"
            maxH="600px"
            borderRadius="6px 6px 0px 0px"
          />
        </ModalBody>
        <ModalFooter
          bgColor="gray.800"
          justifyContent="flex-start"
          height="32px"
          w="100%"
          px="10px"
          py="8px"
        >
          <Link href={imgUrl} target="_blank">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
