import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &.highlight-summary {
            background: var(--green);
            color: #fff;
        }

        strong {
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            display: block;
        }
    }
`;
