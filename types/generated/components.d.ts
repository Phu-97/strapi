import type { Schema, Struct } from '@strapi/strapi';

export interface BlockAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_block_about_sections';
  info: {
    displayName: 'AboutSection';
  };
  attributes: {
    Button: Schema.Attribute.Component<'shared.button', false>;
    Heading: Schema.Attribute.Component<'shared.heading', false>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Images: Schema.Attribute.Media<'images', true>;
  };
}

export interface BlockBannerStory extends Struct.ComponentSchema {
  collectionName: 'components_block_banner_stories';
  info: {
    displayName: 'BannerStory';
  };
  attributes: {
    Heading: Schema.Attribute.Component<'shared.heading', false>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlockContactForm extends Struct.ComponentSchema {
  collectionName: 'components_block_contact_forms';
  info: {
    displayName: 'ContactForm';
  };
  attributes: {
    Email: Schema.Attribute.Email & Schema.Attribute.Required;
    Heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface BlockCta extends Struct.ComponentSchema {
  collectionName: 'components_block_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    Button: Schema.Attribute.Component<'shared.button', false>;
    Heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface BlockCtaShowroom extends Struct.ComponentSchema {
  collectionName: 'components_block_cta_showrooms';
  info: {
    displayName: 'CtaShowroom';
  };
  attributes: {
    Button: Schema.Attribute.Component<'shared.button', true>;
    Heading: Schema.Attribute.Component<'shared.heading', false>;
    SubText: Schema.Attribute.Component<'shared.sub-text', false>;
  };
}

export interface BlockFeaturedCurations extends Struct.ComponentSchema {
  collectionName: 'components_block_featured_curations';
  info: {
    displayName: 'FeaturedCurations';
  };
  attributes: {
    Cards: Schema.Attribute.Component<'shared.card', true>;
    Heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface BlockFooter extends Struct.ComponentSchema {
  collectionName: 'components_block_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    CopyRight: Schema.Attribute.String;
    Logo: Schema.Attribute.Component<'shared.logo', false>;
    Menu: Schema.Attribute.Component<'shared.menu', true>;
    Social: Schema.Attribute.Component<'shared.social', true>;
  };
}

export interface BlockGallery extends Struct.ComponentSchema {
  collectionName: 'components_block_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    Heading: Schema.Attribute.Component<'shared.heading', false>;
    Image: Schema.Attribute.Media<'images', true>;
  };
}

export interface BlockHeader extends Struct.ComponentSchema {
  collectionName: 'components_block_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Button: Schema.Attribute.Component<'shared.righ-menu', true>;
    Logo: Schema.Attribute.Component<'shared.logo', false>;
    Menu: Schema.Attribute.Component<'shared.menu', true>;
    Social: Schema.Attribute.Component<'shared.social', true>;
  };
}

export interface BlockHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_block_hero_banners';
  info: {
    displayName: 'HeroBanner';
  };
  attributes: {
    Background: Schema.Attribute.Media<'images' | 'videos'>;
    Buttons: Schema.Attribute.Component<'shared.button', true>;
    Heading: Schema.Attribute.String;
    SubText: Schema.Attribute.String;
  };
}

export interface BlockSlogent extends Struct.ComponentSchema {
  collectionName: 'components_block_slogents';
  info: {
    displayName: 'Slogent';
  };
  attributes: {
    Heading: Schema.Attribute.Component<'shared.heading', true>;
  };
}

export interface BlockStructural extends Struct.ComponentSchema {
  collectionName: 'components_block_structurals';
  info: {
    displayName: 'Structural';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Heading: Schema.Attribute.String;
    HeadingImage: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
    Image1: Schema.Attribute.Media<'images'>;
    Image2: Schema.Attribute.Media<'images'>;
    SubTitle: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Text: Schema.Attribute.String;
    Variant: Schema.Attribute.Enumeration<['solid', 'outline']> &
      Schema.Attribute.DefaultTo<'solid'>;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SharedHeading extends Struct.ComponentSchema {
  collectionName: 'components_shared_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Heading: Schema.Attribute.String;
    SubText: Schema.Attribute.String;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Logo: Schema.Attribute.String;
  };
}

export interface SharedMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Text: Schema.Attribute.String;
  };
}

export interface SharedRighMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_righ_menus';
  info: {
    displayName: 'RighMenu';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Text: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Text: Schema.Attribute.String;
  };
}

export interface SharedSubText extends Struct.ComponentSchema {
  collectionName: 'components_shared_sub_texts';
  info: {
    displayName: 'SubText';
  };
  attributes: {
    Text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.about-section': BlockAboutSection;
      'block.banner-story': BlockBannerStory;
      'block.contact-form': BlockContactForm;
      'block.cta': BlockCta;
      'block.cta-showroom': BlockCtaShowroom;
      'block.featured-curations': BlockFeaturedCurations;
      'block.footer': BlockFooter;
      'block.gallery': BlockGallery;
      'block.header': BlockHeader;
      'block.hero-banner': BlockHeroBanner;
      'block.slogent': BlockSlogent;
      'block.structural': BlockStructural;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.heading': SharedHeading;
      'shared.image': SharedImage;
      'shared.logo': SharedLogo;
      'shared.menu': SharedMenu;
      'shared.righ-menu': SharedRighMenu;
      'shared.seo': SharedSeo;
      'shared.social': SharedSocial;
      'shared.sub-text': SharedSubText;
    }
  }
}
