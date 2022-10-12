import { SimpleGrid } from '@mantine/core';
import MyCard from './mycard';

export default function Cardgrid () {
    return(
        <SimpleGrid 
        cols={4} 
        spacing="xs"
        breakpoints={[
            { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}>
            <MyCard 
            title="Some Amazing Vacation #1" 
            bookingtext="Book Now" 
            content="text content" 
            imageurl="https://picsum.photos/450"
            badgetext="Newest"
            />
            <MyCard 
            title="Some Amazing Vacation #2" 
            bookingtext="Book Now!" 
            content="text content" 
            imageurl="https://picsum.photos/470"
            badgetext="New"
            />
            <MyCard 
            title="Some Amazing Vacation #3" 
            bookingtext="Book Now......." 
            content="text content" 
            imageurl="https://picsum.photos/480"
            badgetext="Old"
            />
            <MyCard 
            title="Some Amazing Vacation #4" 
            bookingtext="Book Now" 
            content="text content" 
            imageurl="https://picsum.photos/450"
            badgetext="Old"
            />
            <MyCard 
            title="Some Amazing Vacation #5" 
            bookingtext="Book Now!" 
            content="text content" 
            imageurl="https://picsum.photos/470"
            badgetext="Old"
            />
            <MyCard 
            title="Some Amazing Vacation #6" 
            bookingtext="Book Now......." 
            content="text content" 
            imageurl="https://picsum.photos/480"
            badgetext="Oldest"
            />
        </SimpleGrid>
    )
}