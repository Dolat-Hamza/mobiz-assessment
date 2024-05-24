// components/PriceDisplay.tsx
interface Props {
    price: number;
}

const PriceDisplay: React.FC<Props> = ({price}) => (
    <span>${price.toFixed(2)}</span>
);

export default PriceDisplay;
