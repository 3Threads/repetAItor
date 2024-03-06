import React, {useState} from 'react';
import {Header} from '../components/commonComponents/Header';
import {Col, Container, Row, Dropdown, Button} from 'react-bootstrap';
import Footer from '../components/commonComponents/Footer';
import {useNavigate} from "react-router-dom";

export const TestAddPage: React.FC = () => {
    const years = Array.from({length: 15}, (_, k) => k + 2010);
    const [customYear, setCustomYear] = useState<string>('Select Year');
    const [variant, setVariant] = useState<string>('');
    const subjects = ['English', 'Georgian', 'Math'];
    const [selectedSubject, setSelectedSubject] = useState<string>(subjects[0]);
    const items = ['listening', 'matching', 'reading', 'filling', 'filling_without_options', 'conversation', 'Email', 'Essay'];
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleSubjectChange = (event: React.MouseEvent<HTMLDivElement>) => {
        const selectedSubject = event.currentTarget.innerText;
        setSelectedSubject(selectedSubject);
    };

    const handleYearChange = (event: React.MouseEvent<HTMLDivElement>) => {
        const selectedYear = event.currentTarget.innerText;
        setCustomYear(selectedYear);
    };

    const toggleItemSelection = (item: string) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(i => i !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const handleVariantChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVariant(event.target.value);
    };

    const navigate = useNavigate();
    const handleNextPage = () => {
        navigate('/task-details', {state: {selectedItems}});
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header/>
            <Container>
                <Row>
                    <Col xs={'1'}> </Col>
                    <Col xs={'10'} style={{paddingLeft: '12px', paddingTop: '20px'}}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '34px',
                                paddingBottom: '10px'
                            }}
                        >
                            Create a new test
                        </div>

                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <Dropdown data-bs-theme="dark" className={'col-4'}>
                                <Dropdown.Toggle
                                    id="dropdown-basic"
                                    className={'btn btn-primary full-width mb-4 mt-2'}
                                    style={{height: 'auto'}}
                                >
                                    {selectedSubject}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className={'w-100'}>
                                    {subjects.map((subject, index) => (
                                        <Dropdown.Item key={index} onClick={handleSubjectChange}>
                                            {subject}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown data-bs-theme="dark" className={'col-4'}>
                                <Dropdown.Toggle
                                    id="dropdown-basic"
                                    className={'btn btn-primary full-width mb-4 mt-2'}
                                    style={{height: 'auto', marginLeft: '10px'}}
                                >
                                    {customYear}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className={'w-100'}>
                                    {years.map((year) => (
                                        <Dropdown.Item key={year} onClick={handleYearChange}>
                                            {year}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>

                            <input
                                className={'full-width test-input mb-4 mt-2'}
                                type="text"
                                placeholder="Enter The variant"
                                value={variant} // Use the variant state here
                                onChange={(e) => setVariant(e.target.value)} // Update the variant state
                                style={{marginLeft: '20px', height: '40px'}}
                            />
                        </div>

                        <div style={{fontSize: '20px', paddingTop: '10px'}}>
                            Select the tasks you want:
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            {items.map((item, index) => (
                                <Button
                                    key={index}
                                    variant={selectedItems.includes(item) ? 'light' : 'task'}
                                    onClick={() => toggleItemSelection(item)}
                                    style={{marginRight: '10px', marginTop: '10px'}}
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>
                        <Button onClick={handleNextPage} variant="primary">Next</Button>

                        {/*<NewTasksList*/}
                        {/*    subject={selectedSubject}*/}
                        {/*    year={customYear}*/}
                        {/*    variant={variant}*/}
                        {/*    selectedItems={selectedItems}*/}
                        {/*/>*/}
                    </Col>
                    <Col xs={'1'}> </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};
