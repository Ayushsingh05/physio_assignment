
import { Document, Page, View, Text, Svg, Path, Image } from "@react-pdf/renderer";


export const PDFChart = ({ chartImageDataURL }: any) => {
    return (
      <Document>
        <Page>
          <View>
            <Image src={chartImageDataURL} /> +
          </View>
        </Page>
      </Document>
    );
  };

