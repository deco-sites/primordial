import { Section } from "deco/blocks/section.ts";

export interface Props {
  /**
   * @format rich-text
   */
  title: string;
  
  /**
   * @format textarea
   */
  instructions: string;
}

export default function Web3MusicLandingPageInstructions({ title = "Creating a Web3 Music Collective Landing Page", instructions = "1. Choose a template or start from scratch\n2. Add your collective's logo and branding\n3. Write a brief introduction about your collective\n4. Showcase featured artists and their music\n5. Add links to your social media and music platforms\n6. Provide a way for fans to join your community or mailing list\n7. Optionally, integrate web3 features like NFTs or token-gated content" }: Props) {
  return (
    <Section>
      <div class="bg-base-200 text-base-content p-8">
        <h2 class="text-4xl font-bold mb-4">{title}</h2>
        <p class="whitespace-pre-wrap">{instructions}</p>
      </div>
    </Section>
  );
}