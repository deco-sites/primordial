
import { h } from "preact";
import { HTMLWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @format rich-text
   */
  vision?: string;
  /**
   * @format rich-text
   */
  mission?: string;
  /**
   * @format textarea
   */
  coreValues?: string;
  /**
   * @format textarea
   */
  personality?: string;
  /**
   * @format rich-text
   */
  tagline?: string;
  /**
   * @format textarea
   */
  targetAudience?: string;
  /**
   * @format textarea
   */
  keyMessages?: string;
  /**
   * @format rich-text
   */
  promise?: string;
  /**
   * @format textarea
   */
  additionalElements?: string;
  /**
   * @format rich-text
   */
  storytelling?: string;
  /**
   * @format textarea
   */
  workshopsAndEvents?: string;
  /**
   * @format textarea
   */
  technologyIntegration?: string;
  /**
   * @format rich-text
   */
  foundingStory?: string;
}

export default function BrandOverview({
  vision = "<p>Our vision is to create a better world through innovative solutions.</p>",
  mission = "<p>Our mission is to empower people and businesses with cutting-edge technology.</p>",
  coreValues = "Innovation, Integrity, Collaboration, Excellence",
  personality = "Passionate, Visionary, Trustworthy, Innovative",
  tagline = "<h2>Empowering the Future</h2>",
  targetAudience = "Businesses, Entrepreneurs, Professionals, Tech Enthusiasts",
  keyMessages = "Cutting-edge solutions, Innovative technology, Empowering growth, Trusted partner",
  promise = "<p>We promise to deliver exceptional products and services that drive innovation and empower your success.</p>",
  additionalElements = "Sustainability, Community Engagement, Diversity & Inclusion",
  storytelling = "<p>Our story began with a dream to revolutionize the way we live and work. Through passion, dedication, and a relentless pursuit of excellence, we have become pioneers in our field.</p>",
  workshopsAndEvents = "Industry Conferences, Hackathons, Workshops, Networking Events",
  technologyIntegration = "AI, Machine Learning, Cloud Computing, Blockchain, Internet of Things",
  foundingStory = "<p>Founded by a team of visionary entrepreneurs, our company was born out of a desire to create innovative solutions that would change the world. With a passion for technology and a commitment to excellence, we embarked on a journey to push the boundaries of what's possible.</p>",
}: Props) {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Vision</h2>
        <div dangerouslySetInnerHTML={{ __html: vision }} />
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Mission</h2>
        <div dangerouslySetInnerHTML={{ __html: mission }} />
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Core Values</h2>
        <p>{coreValues}</p>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Personality</h2>
        <p>{personality}</p>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Tagline</h2>
        <div dangerouslySetInnerHTML={{ __html: tagline }} />
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Target Audience</h2>
        <p>{targetAudience}</p>
      </div>