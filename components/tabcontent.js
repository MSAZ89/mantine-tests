import { Tabs, Text } from "@mantine/core"
import MyAccordion from "./myaccordion"
import MyBadges from "./mybadges"
import MyIndicator from "./myindicator"
import MyCard from "./mycard"
import MyStack from "./mystack"
import Cardgrid from "./cardgrid"
import styles from '../styles/Home.module.css'

export default function TabContent() {
    return (
        <Tabs radius="xs" orientation="vertical" defaultValue="home" variant='outline'>
        <div className='nav-buttons'>
          <Tabs.List>
            <Tabs.Tab value="home">Home</Tabs.Tab>
            <Tabs.Tab color="orange" value="accordion">Accordion</Tabs.Tab>
            <Tabs.Tab value="badges">Badges</Tabs.Tab>
            <Tabs.Tab color="orange" value="card">Card</Tabs.Tab>
            <Tabs.Tab value="indicator">Indicator</Tabs.Tab>
            <Tabs.Tab color="orange" value="stack">Stack</Tabs.Tab>
          </Tabs.List>
        </div>
          
          <nav className={styles.main} >
            <Tabs.Panel value="home" pl="xs">
              <Text weight={500} size="xl"><a href='https://mantine.dev/pages/getting-started/' target={"_blank"}>Mantine Components</a> Testing. Navigation built with <a href='https://mantine.dev/core/tabs/' target={"_blank"}>Tabs</a></Text>
              <Text weight={300} size="md">Tabs switch between different views.</Text>
              <br/>
              <Text weight={300} size="md">Building this for fun while testing Mantine components.</Text>
            </Tabs.Panel>
  
            <Tabs.Panel value="accordion" pl="xs">
              <Text weight={500} size="xl"><a href='https://mantine.dev/core/accordion/' target={"_blank"}>Accordion</a></Text>
              <Text weight={300} size="md">Divide content into collapsible sections.</Text>
              <br/>
              <MyAccordion />
            </Tabs.Panel>
  
            <Tabs.Panel value="badges" pl="xs">
              <Text weight={500} size="xl"><a href='https://mantine.dev/core/badge/' target={"_blank"}>Badges</a></Text>
              <Text weight={300} size="md">Display badge, pill or tag.</Text>
              <br/>
              <MyBadges />
            </Tabs.Panel>
  
            <Tabs.Panel value="card" pl="xs">
              <Text weight={500} size="xl"><a href='https://mantine.dev/core/card/' target={"_blank"}>Card</a></Text>
              <Text weight={300} size="md">Card with context styles for Image and Divider components.</Text>
              <br/>
              <Cardgrid />
            </Tabs.Panel>
  
            <Tabs.Panel value="indicator" pl="xs">
              <Text weight={500} size="xl"><a href='https://mantine.dev/core/indicator/' target={"_blank"}>Indicator</a></Text>
              <Text weight={300} size="md">Display element at the corner of another element.</Text>
              <br/>
              <MyIndicator />
            </Tabs.Panel>
  
            <Tabs.Panel value="stack" pl="xs">
              <Text weight={500} size="xl"><a href='https://mantine.dev/core/stack/' target={"_blank"}>Stack</a></Text>
              <Text weight={300} size="md">Compose elements and components in vertical flex container.</Text>
              <br/>
              <MyStack />
            </Tabs.Panel>
  
          </nav>
  
          </Tabs>
    )
}