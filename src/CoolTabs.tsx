import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

interface CoolForm {
    name: string;
    tos: string;
}

const CoolForm = () => {
    const methods = useForm<CoolForm>({
        mode: 'all'
    });

    return (
        <div
        >
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(data => console.log(data))}>
                    <input {...methods.register('name')} name='name' />
                    <input {...methods.register('tos')} name='tos' />
                    <Button type='submit' variant='contained'>
                        SUB
                    </Button>
                </form>

            </FormProvider>
        </div>
    )
}


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {(
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);
    const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', marginTop: '50px' }}
            >
                {
                    items.map((item, index) =>
                        <Tab label={item.toString()} {...a11yProps(index)} key={index} />
                    )
                }
            </Tabs>
            {
                items.map((item, index) =>
                    <TabPanel value={value} index={index}>
                        <CoolForm />
                    </TabPanel>
                )
            }
            <Button onClick={() => setItems(items => [...items, 5])}  variant='contained'>
                ADD ITEM
            </Button>
        </Box>
    );
}
