import * as React from "react"
import {useEffect, useRef, useState} from "react";


const getNestedHeadings = (headingElements) => {
    const nestedHeadings = [];

    headingElements.forEach((heading) => {
        const {innerText: title, id} = heading;
        if (id !== "") {
            nestedHeadings.push({id, title});
        }
    });

    return nestedHeadings;
};

const useHeadingsData = () => {
    const [nestedHeadings, setNestedHeadings] = useState([]);

    useEffect(() => {
        const headingElements = Array.from(
            document.querySelectorAll("main div")
        );

        const newNestedHeadings = getNestedHeadings(headingElements);
        setNestedHeadings(newNestedHeadings);
    }, []);

    return {nestedHeadings};
};

const useIntersectionObserver = (setActiveId) => {
    const headingElementsRef = useRef({});
    useEffect(() => {
        const callback = (headings) => {
            headingElementsRef.current = headings.reduce((map, headingElement) => {
                map[headingElement.target.id] = headingElement;
                return map;
            }, headingElementsRef.current);
            const visibleHeadings = [];
            Object.keys(headingElementsRef.current).forEach((key) => {
                const headingElement = headingElementsRef.current[key];
                if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
            });

            function getIndexFromId(id) {
                return headingElements.findIndex((heading) => heading.id === id);
            }


            if (visibleHeadings.length === 1) {
                setActiveId(visibleHeadings[0].target.id);
            } else if (visibleHeadings.length > 1) {
                const sortedVisibleHeadings = visibleHeadings.sort((a, b) => {
                    return (getIndexFromId(a.target.id) > getIndexFromId(b.target.id));
                });

                setActiveId(sortedVisibleHeadings[0].target.id);
            }
        };

        const observer = new IntersectionObserver(callback, {
            root: document.querySelector("iframe"),
        });

        const headingElements = Array.from(document.querySelectorAll("main div"));

        headingElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [setActiveId]);
};

const Headings = ({headings, activeId, setActiveId}) => {
    return (
        <ul>
            {headings.map((heading) => (
                <div key={heading.id} className={heading.id === activeId ? "active" : ""}
                     onClick={() => {
                         {
                             setActiveId(heading.id)
                             if (document.querySelector(`#${heading.id}`)) {
                                 document.querySelector(`#${heading.id}`).scrollIntoView();
                             }
                         }
                     }}>
                    <a
                        href={`#${heading.id}`}
                    >
                        {heading.id}
                    </a>
                </div>
            ))}
        </ul>
    )
};

function TableOfContents() {
    const [activeId, setActiveId] = useState();
    const {nestedHeadings} = useHeadingsData();
    useIntersectionObserver(setActiveId);

    return (
        <nav className="table_of_contents_container">
            <Headings headings={nestedHeadings} activeId={activeId} setActiveId={setActiveId}/>
        </nav>
    );
}

export default TableOfContents;
