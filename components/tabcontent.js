import { Tabs, Text, Paper } from "@mantine/core"
import MyAccordion from "./myaccordion"
import MyBadges from "./mybadges"
import MyIndicator from "./myindicator"
import MyCard from "./mycard"
import MyStack from "./mystack"
import Cardgrid from "./cardgrid"
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import MyStepper from "./mystepper"
import MyCopyButton from "./mycopybutton"

export default function TabContent() {

    return (
      <>
        <Head>
          <title>Mantine Component Testing</title>
          <meta name="description" content="Mantine Component Testing Michael Simon AZ" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Tabs radius="xs" orientation="vertical" defaultValue="home" variant='outline'>
        <nav className='nav-buttons'>
          <Tabs.List>
            <Tabs.Tab value="home">Home</Tabs.Tab>
            <Tabs.Tab color="orange" value="accordion">Accordion</Tabs.Tab>
            <Tabs.Tab value="badges">Badges</Tabs.Tab>
            <Tabs.Tab color="orange" value="card">Card</Tabs.Tab>
            <Tabs.Tab value="indicator">Indicator</Tabs.Tab>
            <Tabs.Tab color="orange" value="stack">Stack</Tabs.Tab>
            <Tabs.Tab value="stepper">Stepper</Tabs.Tab>
            <Tabs.Tab value="copybutton">Copy Button</Tabs.Tab>
          </Tabs.List>
        </nav>
          
          <div className={styles.main} >
            <Tabs.Panel value="home" pl="xs">
              <Paper className="tab-paper-text" shadow="xs" radius="xs" p="xs">
                <Text weight={500} size="xl"><a href='https://mantine.dev/pages/getting-started/' rel="noreferrer" target={"_blank"}>Mantine Components</a> Testing. Navigation built with <a href='https://mantine.dev/core/tabs/' rel="noreferrer" target={"_blank"}>Tabs</a></Text>
                <Text weight={300} size="md">Tabs switch between different views.</Text>
                <br/>
                <Text weight={300} size="md">Building this for fun while testing Mantine components.</Text>
              </Paper>
            </Tabs.Panel>
  
            <Tabs.Panel value="accordion" pl="xs">
            <Paper className="tab-paper-text" shadow="xs" radius="xs" p="xs">
              <Text weight={500} size="xl"><a href='https://mantine.dev/core/accordion/' rel="noreferrer" target={"_blank"}>Accordion</a></Text>
              <Text weight={300} size="md">Divide content into collapsible sections.</Text>
              <br/>
              <MyAccordion />
            </Paper>
            </Tabs.Panel>
  
            <Tabs.Panel value="badges" pl="xs">
            <Paper className="tab-paper-text" shadow="xs" radius="xs" p="xs">
              <Text weight={500} size="xl"><a href='https://mantine.dev/core/badge/' rel="noreferrer" target={"_blank"}>Badges</a></Text>
              <Text weight={300} size="md">Display badge, pill or tag.</Text>
              <br/>
              <MyBadges />
            </Paper>
            </Tabs.Panel>
  
            <Tabs.Panel value="card" pl="xs">
            <Paper className="tab-paper-text" shadow="xs" radius="xs" p="xs">
              <Text weight={500} size="xl"><a href='https://mantine.dev/core/card/' rel="noreferrer" target={"_blank"}>Card</a></Text>
              <Text weight={300} size="md">Card with context styles for Image and Divider components.</Text>
              <br/>
              <Cardgrid />
            </Paper>
            </Tabs.Panel>
  
            <Tabs.Panel value="indicator" pl="xs">
            <Paper className="tab-paper-text" shadow="xs" radius="xs" p="xs">
              <Text weight={500} size="xl"><a href='https://mantine.dev/core/indicator/' rel="noreferrer" target={"_blank"}>Indicator</a></Text>
              <Text weight={300} size="md">Display element at the corner of another element.</Text>
              <br/>
              <MyIndicator />
            </Paper>
            </Tabs.Panel>
  
            <Tabs.Panel value="stack" pl="xs">
            <Paper className="tab-paper-text" shadow="xs" radius="xs" p="xs">
              <Text weight={500} size="xl"><a href='https://mantine.dev/core/stack/' rel="noreferrer" target={"_blank"}>Stack</a></Text>
              <Text weight={300} size="md">Compose elements and components in vertical flex container.</Text>
              <br/>
              <MyStack />
            </Paper>
            </Tabs.Panel>

            <Tabs.Panel value="stepper" pl="xs">
            <Paper className="tab-paper-text" shadow="xs" radius="xs" p="xs">
              <Text weight={500} size="xl"><a href='https://mantine.dev/core/stepper/' rel="noreferrer" target={"_blank"}>Stepper</a></Text>
              <Text weight={300} size="md">Display content divided into a steps sequence.</Text>
              <br/>
              <MyStepper />
            </Paper>
            </Tabs.Panel>
            
            <Tabs.Panel value="copybutton" pl="xs">
            <Paper className="tab-paper-text" shadow="xs" radius="xs" p="xs">
              <Text weight={500} size="xl"><a href='https://mantine.dev/core/copy-button/' rel="noreferrer" target={"_blank"}>Copy Button</a></Text>
              <Text weight={300} size="md">CopyButton is based on use-clipboard hook.</Text>
              <br/>

              <MyCopyButton value="http://localhost:3000/" />
              <MyCopyButton value="hahahahahah" />
              <MyCopyButton value="memes" />
            </Paper>
            </Tabs.Panel>
          </div>
  
          </Tabs>
      </>
    )
}