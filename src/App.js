import React, { useEffect, useState } from "react";
import { Grommet, Card, Grid, Page, PageContent, PageHeader } from "grommet";
import { hpe } from "grommet-theme-hpe";

function App() {
  return (
    <Grommet theme={hpe} full="min">
      <Page>
        <PageContent gap="medium">
          <Content />
        </PageContent>
      </Page>
    </Grommet>
  );
}

const content = {
  "/": {
    title: "Home",
  },
  "/services": {
    title: "Services",
    subtitle: "Discover and manage services.",
  },
  "/devices": {
    title: "Devices",
    subtitle: "Onboard and manage all devices in your inventory.",
  },
};

const Content = () => {
  const [activeContent, setActiveContent] = useState(
    content[window.location.pathname]
  );

  useEffect(() => {
    const updateContent = () => {
      setActiveContent(content[window.location.pathname]);
    };
    window.addEventListener("routeChange", updateContent);
    updateContent();
    return () => window.removeEventListener("routeChange", updateContent);
  }, []);

  return (
    <>
      <PageHeader
        title={activeContent.title}
        subtitle={activeContent.subtitle}
      />
      <Grid columns="small" rows="small" gap="medium">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
          <Card key={index} />
        ))}
      </Grid>
    </>
  );
};

export default App;
