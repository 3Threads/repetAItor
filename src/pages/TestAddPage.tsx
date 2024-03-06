import React, {useState} from 'react';
import {Header} from '../components/commonComponents/Header';
import {Col, Container, Row, Dropdown, Button} from 'react-bootstrap';
import Footer from '../components/commonComponents/Footer';
import {useNavigate} from "react-router-dom";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const TestAddPage: React.FC = () => {
    const years = Array.from({length: 15}, (_, k) => k + 2010);
    const [customYear, setCustomYear] = useState<string>('Select Year');
    const [variant, setVariant] = useState<string>('');
    const subjects = ['English', 'Georgian', 'Math'];
    const [selectedSubject, setSelectedSubject] = useState<string>(subjects[0]);
    const items = ['listening', 'matching', 'reading', 'filling', 'filling_without_options', 'conversation', 'email', 'essay'];
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    interface SingleItemState {
        selected: boolean;
        count: number;
    }

    interface ItemsState {
        [key: string]: SingleItemState;
    }


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
        navigate('/task-details', {state: {itemsState}});
    };

    const [itemsState, setItemsState] = useState<ItemsState>(() => {
        const initialState: ItemsState = {};
        items.forEach((item: string) => {
            initialState[item] = {selected: false, count: 0};
        });
        return initialState;
    });

    const handleIncrement = (item: string) => {
        setItemsState(prevState => ({
            ...prevState,
            [item]: {selected: true, count: prevState[item].count + 1},
        }));
    };

    const handleDecrement = (item: string) => {
        setItemsState(prevState => {
            const newCount = prevState[item].count - 1;
            const isSelected = newCount > 0;
            return {
                ...prevState,
                [item]: {selected: isSelected, count: newCount},
            };
        });

        if (itemsState[item].count === 1) { // If the item's count will be 0 after decrement
            setSelectedItems(prevSelectedItems => prevSelectedItems.filter(i => i !== item));
        }
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
                        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
                            {items.map((item, index) => {
                                const {selected, count} = itemsState[item];
                                return (
                                    <div key={index}
                                         style={{
                                             marginBottom: '10px',
                                             marginRight: '10px'
                                         }}>
                                        <Button
                                            key={index}
                                            variant={selectedItems.includes(item) ? 'light' : 'task'}
                                            style={{
                                                marginRight: '10px',
                                                marginTop: '10px',
                                                padding: '0',
                                                display: 'flex',
                                                alignItems: 'center',
                                                height: '50px'
                                            }}
                                            onClick={() => handleIncrement(item)}
                                        >
                                            <span style={{
                                                display: 'inline-block',
                                                padding: '16px',
                                                paddingRight: selected ? '4px' : '16px',

                                            }}>{item} {selected && `(${count})`}</span>
                                            {selected && (
                                                <div style={{display: 'inline-block', alignItems: 'center'}}>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        marginRight: '10px',
                                                    }}>
                                                        <Button size="sm" variant="outline-secondary" onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleIncrement(item);
                                                        }} style={{
                                                            padding: '0 6px',
                                                            border: 'none',
                                                            marginTop: '5px',
                                                            background: 'none'
                                                        }}><FontAwesomeIcon icon={faCaretUp}/></Button>
                                                        <Button size="sm" variant="outline-secondary" onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDecrement(item);
                                                        }} style={{
                                                            padding: '0 6px',
                                                            border: 'none',
                                                            background: 'none'
                                                        }}><FontAwesomeIcon icon={faCaretDown}/></Button>
                                                    </div>
                                                </div>
                                            )}
                                        </Button>
                                    </div>
                                );
                            })}
                        </div>

                        <Button onClick={handleNextPage} variant="primary">Next</Button>
                    </Col>
                    <Col xs={'1'}> </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};
