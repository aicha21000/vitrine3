import { Seo } from "@/ui/components/seo"
import { Button } from "@/ui/design-system/typography/button";
import { Typography } from "@/ui/design-system/typography/typography";
export default function Home() {
  return (
    <div className="space-y-5">
      <Seo title="vitrine3" description="site vitrine" />

      <Button />

      {/* <Typography theme="primary" variant="h1" component="div">
        Vitrine 3
      </Typography>
      <Typography theme="secondary" variant="h2" component="div">
        Vitrine 3
      </Typography>
      <Typography theme="grey" variant="lead" component="div">
        Vitrine 3
      </Typography>
      <Typography theme="black" variant="h3" component="div">
        Vitrine 3
      </Typography>
      <Typography variant="h5" component="div">
        Vitrine 3
      </Typography>
      <Typography variant="body-sm" component="div">
        Vitrine 3
      </Typography>
      <Typography variant="caption4" component="div">
        Vitrine 3
      </Typography>
      <Typography variant="caption4" weight="medium" component="div">
        Vitrine 3
      </Typography> */}
    </div>
  );
}
