import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useLocation, useParams} from "react-router-dom";
import AddCity from "./AddCity";
import AddAttraction from "./AddAttraction";

function AddNew(){

    let {type} = useParams();
    const cities = useLocation();

    return(
        <Tabs className="add_new_tab_container" defaultIndex={type === "attraction" ? 1 : 0}>
            <TabList id="add_new_tab_list">
                <Tab id="add_new_tab">Add city</Tab>
                <Tab id="add_new_tab">Add attraction</Tab>
            </TabList>

            <TabPanel>
                <AddCity/>
            </TabPanel>
            <TabPanel>
                <AddAttraction cities={cities}/>
            </TabPanel>
        </Tabs>
    )
}

export default AddNew;
