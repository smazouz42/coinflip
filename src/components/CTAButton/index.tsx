import { Button } from "@/components/ui/button";
interface CTAButtonProp {
  style : string;
  text : string;
}
export const CTAButton = ({ text, style}:CTAButtonProp ) => {
  return (
    <Button className={style}>
      {text}
    </Button>
  );
};