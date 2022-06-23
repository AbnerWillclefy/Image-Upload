import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [selectedImageUrl, setSelectedImageUrl] = useState();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function handleViewImage(imgUrl) {
    setSelectedImageUrl(imgUrl);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} gap={40}>
        {cards.map(card => (
          <Card
            data={card}
            viewImage={() => handleViewImage(card.url)}
            key={card.id}
          />
        ))}
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={selectedImageUrl}
      />
    </>
  );
}
