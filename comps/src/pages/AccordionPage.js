import Accordion from "../components/Accordion";
import '../index.css';

function AccordionPage() {
    const items = [
        {
            id: '12',
            label: 'Can I use React on a project?',
            content: 'Minim ipsum amet sint pariatur magna voluptate incididunt aliquip ad elit proident qui qui. Sunt adipisicing nostrud minim cillum aute quis ullamco occaecat duis ipsum aliqua elit esse consectetur. Magna tempor amet elit quis dolore occaecat quis deserunt aliquip. Pariatur reprehenderit elit voluptate sit velit.'
        },
        {
            id: '123',
            label: 'Can I use JavaScript on a project?',
            content: 'Minim ipsum amet sint pariatur magna voluptate incididunt aliquip ad elit proident qui qui. Sunt adipisicing nostrud minim cillum aute quis ullamco occaecat duis ipsum aliqua elit esse consectetur. Magna tempor amet elit quis dolore occaecat quis deserunt aliquip. Pariatur reprehenderit elit voluptate sit velit.'
        },
        {
            id: '1233',
            label: 'Can I use C++ on a project?',
            content: 'Minim ipsum amet sint pariatur magna voluptate incididunt aliquip ad elit proident qui qui. Sunt adipisicing nostrud minim cillum aute quis ullamco occaecat duis ipsum aliqua elit esse consectetur. Magna tempor amet elit quis dolore occaecat quis deserunt aliquip. Pariatur reprehenderit elit voluptate sit velit.'
        }
    ]

    return <Accordion items={items}/>
};

export default AccordionPage;