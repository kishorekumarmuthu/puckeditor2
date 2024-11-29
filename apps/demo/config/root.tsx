import { DefaultRootProps } from "@/core";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { usePuck } from "@/core";
import { MyProvider } from "./blocks/Hero/ToggleSwitch";

export type RootProps = DefaultRootProps;

function Root({ children, puck }: RootProps) {
  // const { appState } = usePuck();
  // console.log(appState);
  return (
    <>
      <MyProvider>
        {/* <Header editMode={puck.isEditing} /> */}
        {children}
        {/* <Footer>
        <Footer.List title="Section">
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
        </Footer.List>
        <Footer.List title="Section">
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
        </Footer.List>
        <Footer.List title="Section">
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
        </Footer.List>
        <Footer.List title="Section">
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
        </Footer.List>
      </Footer> */}
      </MyProvider>
    </>
  );
}

export default Root;
