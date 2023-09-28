export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
  },
};

export const BASE_URL = "https://genius-song-lyrics1.p.rapidapi.com";

export const searchSong = async (song) => {
  /* try {
    const response = await fetch(`${BASE_URL}/search/?q=${song}&per_page=8`, options);
    const result = await response.json();
    return result.hits;
  } catch (error) {
    console.error(error);
    return null;
  } */

  const result = {
    hits: [
      {
        highlights: [],
        index: "song",
        type: "song",
        result: {
          _type: "song",
          annotation_count: 13,
          api_path: "/songs/2396871",
          artist_names: "Alan Walker",
          full_title: "Faded by Alan Walker",
          header_image_thumbnail_url:
            "https://images.genius.com/10db94c5c11e1bb1ac9cc917a6c59250.300x300x1.jpg",
          header_image_url:
            "https://images.genius.com/10db94c5c11e1bb1ac9cc917a6c59250.1000x1000x1.jpg",
          id: 2396871,
          instrumental: false,
          lyrics_owner_id: 93685,
          lyrics_state: "complete",
          lyrics_updated_at: 1641110891,
          path: "/Alan-walker-faded-lyrics",
          pyongs_count: 114,
          song_art_image_thumbnail_url:
            "https://images.genius.com/708aef5551c9f670205b5cab3f38c8bd.300x300x1.jpg",
          song_art_image_url:
            "https://images.genius.com/708aef5551c9f670205b5cab3f38c8bd.1000x1000x1.jpg",
          stats: {
            unreviewed_annotations: 0,
            hot: false,
            pageviews: 1290638,
          },
          title: "Faded",
          title_with_featured: "Faded",
          updated_by_human_at: 1644264066,
          url: "https://genius.com/Alan-walker-faded-lyrics",
          primary_artist: {
            _type: "artist",
            api_path: "/artists/456537",
            header_image_url:
              "https://images.genius.com/5dc7f5c57981ba34e464414f7fc08ebf.1000x333x1.jpg",
            id: 456537,
            image_url:
              "https://images.genius.com/70b44d7b5a4be028e87b865dd425a4cc.1000x1000x1.jpg",
            index_character: "a",
            is_meme_verified: false,
            is_verified: true,
            name: "Alan Walker",
            slug: "Alan-walker",
            url: "https://genius.com/artists/Alan-walker",
            iq: 3463,
          },
        },
      },
      {
        highlights: [],
        index: "song",
        type: "song",
        result: {
          _type: "song",
          annotation_count: 2,
          api_path: "/songs/3801089",
          artist_names: "Alan Walker (Ft. Au/Ra & Tomine Harket)",
          full_title: "Darkside by Alan Walker (Ft. Au/Ra & Tomine Harket)",
          header_image_thumbnail_url:
            "https://images.genius.com/10db94c5c11e1bb1ac9cc917a6c59250.300x300x1.jpg",
          header_image_url:
            "https://images.genius.com/10db94c5c11e1bb1ac9cc917a6c59250.1000x1000x1.jpg",
          id: 3801089,
          instrumental: false,
          lyrics_owner_id: 6355938,
          lyrics_state: "complete",
          lyrics_updated_at: 1644862245,
          path: "/Alan-walker-darkside-lyrics",
          pyongs_count: 47,
          song_art_image_thumbnail_url:
            "https://images.genius.com/bbfa8575eaff89e5e2c93c8a0095fab9.300x300x1.png",
          song_art_image_url:
            "https://images.genius.com/bbfa8575eaff89e5e2c93c8a0095fab9.1000x1000x1.png",
          stats: {
            unreviewed_annotations: 1,
            hot: false,
            pageviews: 683229,
          },
          title: "Darkside",
          title_with_featured: "Darkside (Ft. Au/Ra & Tomine Harket)",
          updated_by_human_at: 1644862246,
          url: "https://genius.com/Alan-walker-darkside-lyrics",
          primary_artist: {
            _type: "artist",
            api_path: "/artists/456537",
            header_image_url:
              "https://images.genius.com/5dc7f5c57981ba34e464414f7fc08ebf.1000x333x1.jpg",
            id: 456537,
            image_url:
              "https://images.genius.com/70b44d7b5a4be028e87b865dd425a4cc.1000x1000x1.jpg",
            index_character: "a",
            is_meme_verified: false,
            is_verified: true,
            name: "Alan Walker",
            slug: "Alan-walker",
            url: "https://genius.com/artists/Alan-walker",
            iq: 3463,
          },
        },
      },
      {
        highlights: [],
        index: "song",
        type: "song",
        result: {
          _type: "song",
          annotation_count: 4,
          api_path: "/songs/3714282",
          artist_names: "Alan Walker (Ft. Sophia Somajo)",
          full_title: "Diamond Heart by Alan Walker (Ft. Sophia Somajo)",
          header_image_thumbnail_url:
            "https://images.genius.com/10db94c5c11e1bb1ac9cc917a6c59250.300x300x1.jpg",
          header_image_url:
            "https://images.genius.com/10db94c5c11e1bb1ac9cc917a6c59250.1000x1000x1.jpg",
          id: 3714282,
          instrumental: false,
          lyrics_owner_id: 4801273,
          lyrics_state: "complete",
          lyrics_updated_at: 1643593340,
          path: "/Alan-walker-diamond-heart-lyrics",
          pyongs_count: 34,
          song_art_image_thumbnail_url:
            "https://images.genius.com/c0d2b31b18186ca1898e0622f44a3b0d.300x300x1.jpg",
          song_art_image_url:
            "https://images.genius.com/c0d2b31b18186ca1898e0622f44a3b0d.1000x1000x1.jpg",
          stats: {
            unreviewed_annotations: 3,
            hot: false,
            pageviews: 542172,
          },
          title: "Diamond Heart",
          title_with_featured: "Diamond Heart (Ft. Sophia Somajo)",
          updated_by_human_at: 1643593340,
          url: "https://genius.com/Alan-walker-diamond-heart-lyrics",
          primary_artist: {
            _type: "artist",
            api_path: "/artists/456537",
            header_image_url:
              "https://images.genius.com/5dc7f5c57981ba34e464414f7fc08ebf.1000x333x1.jpg",
            id: 456537,
            image_url:
              "https://images.genius.com/70b44d7b5a4be028e87b865dd425a4cc.1000x1000x1.jpg",
            index_character: "a",
            is_meme_verified: false,
            is_verified: true,
            name: "Alan Walker",
            slug: "Alan-walker",
            url: "https://genius.com/artists/Alan-walker",
            iq: 3463,
          },
        },
      },
      {
        highlights: [],
        index: "song",
        type: "song",
        result: {
          _type: "song",
          annotation_count: 1,
          api_path: "/songs/5123075",
          artist_names: "Alan Walker & Ava Max",
          full_title: "Alone, Pt. II by Alan Walker & Ava Max",
          header_image_thumbnail_url:
            "https://images.genius.com/0b14a916f0d132ea696b587ecd5c8dea.300x300x1.jpg",
          header_image_url:
            "https://images.genius.com/0b14a916f0d132ea696b587ecd5c8dea.1000x1000x1.jpg",
          id: 5123075,
          instrumental: false,
          lyrics_owner_id: 8059868,
          lyrics_state: "complete",
          lyrics_updated_at: 1626720306,
          path: "/Alan-walker-and-ava-max-alone-pt-ii-lyrics",
          pyongs_count: 31,
          song_art_image_thumbnail_url:
            "https://images.genius.com/9fa97a64e5bebfbf9d692b7b82bbed90.300x300x1.png",
          song_art_image_url:
            "https://images.genius.com/9fa97a64e5bebfbf9d692b7b82bbed90.1000x1000x1.png",
          stats: {
            unreviewed_annotations: 0,
            hot: false,
            pageviews: 335498,
          },
          title: "Alone, Pt. II",
          title_with_featured: "Alone, Pt. II",
          updated_by_human_at: 1637972224,
          url: "https://genius.com/Alan-walker-and-ava-max-alone-pt-ii-lyrics",
          primary_artist: {
            _type: "artist",
            api_path: "/artists/2055165",
            header_image_url:
              "https://assets.genius.com/images/default_avatar_300.png?1646412014",
            id: 2055165,
            image_url:
              "https://assets.genius.com/images/default_avatar_300.png?1646412014",
            index_character: "a",
            is_meme_verified: false,
            is_verified: false,
            name: "Alan Walker & Ava Max",
            slug: "Alan-walker-and-ava-max",
            url: "https://genius.com/artists/Alan-walker-and-ava-max",
          },
        },
      },
      {
        highlights: [],
        index: "song",
        type: "song",
        result: {
          _type: "song",
          annotation_count: 1,
          api_path: "/songs/3234393",
          artist_names:
            "Alan Walker, Digital Farm Animals, Noah Cyrus & Juliander",
          full_title:
            "All Falls Down by Alan Walker, Digital Farm Animals, Noah Cyrus & Juliander",
          header_image_thumbnail_url:
            "https://images.genius.com/10db94c5c11e1bb1ac9cc917a6c59250.300x300x1.jpg",
          header_image_url:
            "https://images.genius.com/10db94c5c11e1bb1ac9cc917a6c59250.1000x1000x1.jpg",
          id: 3234393,
          instrumental: false,
          lyrics_owner_id: 93685,
          lyrics_state: "complete",
          lyrics_updated_at: 1601012369,
          path: "/Alan-walker-digital-farm-animals-noah-cyrus-and-juliander-all-falls-down-lyrics",
          pyongs_count: 39,
          song_art_image_thumbnail_url:
            "https://images.genius.com/dc1c965917b3b1cb820008cfc217ae9e.300x300x1.jpg",
          song_art_image_url:
            "https://images.genius.com/dc1c965917b3b1cb820008cfc217ae9e.1000x1000x1.jpg",
          stats: {
            unreviewed_annotations: 0,
            hot: false,
            pageviews: 322867,
          },
          title: "All Falls Down",
          title_with_featured: "All Falls Down",
          updated_by_human_at: 1609878489,
          url: "https://genius.com/Alan-walker-digital-farm-animals-noah-cyrus-and-juliander-all-falls-down-lyrics",
          primary_artist: {
            _type: "artist",
            api_path: "/artists/2408754",
            header_image_url:
              "https://assets.genius.com/images/default_avatar_300.png?1646412014",
            id: 2408754,
            image_url:
              "https://assets.genius.com/images/default_avatar_300.png?1646412014",
            index_character: "a",
            is_meme_verified: false,
            is_verified: false,
            name: "Alan Walker, Digital Farm Animals, Noah Cyrus & Juliander",
            slug: "Alan-walker-digital-farm-animals-noah-cyrus-and-juliander",
            url: "https://genius.com/artists/Alan-walker-digital-farm-animals-noah-cyrus-and-juliander",
          },
        },
      },
      {
        highlights: [],
        index: "song",
        type: "song",
        result: {
          _type: "song",
          annotation_count: 3,
          api_path: "/songs/4395068",
          artist_names: "Alan Walker, Sabrina Carpenter & Farruko",
          full_title: "On My Way by Alan Walker, Sabrina Carpenter & Farruko",
          header_image_thumbnail_url:
            "https://images.genius.com/0b14a916f0d132ea696b587ecd5c8dea.300x300x1.jpg",
          header_image_url:
            "https://images.genius.com/0b14a916f0d132ea696b587ecd5c8dea.1000x1000x1.jpg",
          id: 4395068,
          instrumental: false,
          lyrics_owner_id: 5667167,
          lyrics_state: "complete",
          lyrics_updated_at: 1611267605,
          path: "/Alan-walker-sabrina-carpenter-and-farruko-on-my-way-lyrics",
          pyongs_count: 55,
          song_art_image_thumbnail_url:
            "https://images.genius.com/ad957509e73769340113146e3d74f4f7.300x300x1.png",
          song_art_image_url:
            "https://images.genius.com/ad957509e73769340113146e3d74f4f7.1000x1000x1.png",
          stats: {
            unreviewed_annotations: 0,
            hot: false,
            pageviews: 294063,
          },
          title: "On My Way",
          title_with_featured: "On My Way",
          updated_by_human_at: 1646242626,
          url: "https://genius.com/Alan-walker-sabrina-carpenter-and-farruko-on-my-way-lyrics",
          primary_artist: {
            _type: "artist",
            api_path: "/artists/1767908",
            header_image_url:
              "https://assets.genius.com/images/default_avatar_300.png?1646412014",
            id: 1767908,
            image_url:
              "https://assets.genius.com/images/default_avatar_300.png?1646412014",
            index_character: "a",
            is_meme_verified: false,
            is_verified: false,
            name: "Alan Walker, Sabrina Carpenter & Farruko",
            slug: "Alan-walker-sabrina-carpenter-and-farruko",
            url: "https://genius.com/artists/Alan-walker-sabrina-carpenter-and-farruko",
          },
        },
      },
      {
        highlights: [],
        index: "song",
        type: "song",
        result: {
          _type: "song",
          annotation_count: 2,
          api_path: "/songs/2917386",
          artist_names: "Alan Walker",
          full_title: "Alone by Alan Walker",
          header_image_thumbnail_url:
            "https://images.genius.com/10db94c5c11e1bb1ac9cc917a6c59250.300x300x1.jpg",
          header_image_url:
            "https://images.genius.com/10db94c5c11e1bb1ac9cc917a6c59250.1000x1000x1.jpg",
          id: 2917386,
          instrumental: false,
          lyrics_owner_id: 3768782,
          lyrics_state: "complete",
          lyrics_updated_at: 1571528109,
          path: "/Alan-walker-alone-lyrics",
          pyongs_count: 40,
          song_art_image_thumbnail_url:
            "https://images.genius.com/7055783b516c9db919098cd119ab714e.300x300x1.jpg",
          song_art_image_url:
            "https://images.genius.com/7055783b516c9db919098cd119ab714e.1000x1000x1.jpg",
          stats: {
            unreviewed_annotations: 1,
            hot: false,
            pageviews: 240853,
          },
          title: "Alone",
          title_with_featured: "Alone",
          updated_by_human_at: 1628781578,
          url: "https://genius.com/Alan-walker-alone-lyrics",
          primary_artist: {
            _type: "artist",
            api_path: "/artists/456537",
            header_image_url:
              "https://images.genius.com/5dc7f5c57981ba34e464414f7fc08ebf.1000x333x1.jpg",
            id: 456537,
            image_url:
              "https://images.genius.com/70b44d7b5a4be028e87b865dd425a4cc.1000x1000x1.jpg",
            index_character: "a",
            is_meme_verified: false,
            is_verified: true,
            name: "Alan Walker",
            slug: "Alan-walker",
            url: "https://genius.com/artists/Alan-walker",
            iq: 3463,
          },
        },
      },
      {
        highlights: [],
        index: "song",
        type: "song",
        result: {
          _type: "song",
          annotation_count: 1,
          api_path: "/songs/3089240",
          artist_names: "Alan Walker (Ft. Gavin James)",
          full_title: "Tired by Alan Walker (Ft. Gavin James)",
          header_image_thumbnail_url:
            "https://images.genius.com/4dcbbcb94dcf4af84c1071e35973255a.300x300x1.jpg",
          header_image_url:
            "https://images.genius.com/4dcbbcb94dcf4af84c1071e35973255a.640x640x1.jpg",
          id: 3089240,
          instrumental: false,
          lyrics_owner_id: 126836,
          lyrics_state: "complete",
          lyrics_updated_at: 1600785321,
          path: "/Alan-walker-tired-lyrics",
          pyongs_count: 25,
          song_art_image_thumbnail_url:
            "https://images.genius.com/4dcbbcb94dcf4af84c1071e35973255a.300x300x1.jpg",
          song_art_image_url:
            "https://images.genius.com/4dcbbcb94dcf4af84c1071e35973255a.640x640x1.jpg",
          stats: {
            unreviewed_annotations: 0,
            hot: false,
            pageviews: 177206,
          },
          title: "Tired",
          title_with_featured: "Tired (Ft. Gavin James)",
          updated_by_human_at: 1632561803,
          url: "https://genius.com/Alan-walker-tired-lyrics",
          primary_artist: {
            _type: "artist",
            api_path: "/artists/456537",
            header_image_url:
              "https://images.genius.com/5dc7f5c57981ba34e464414f7fc08ebf.1000x333x1.jpg",
            id: 456537,
            image_url:
              "https://images.genius.com/70b44d7b5a4be028e87b865dd425a4cc.1000x1000x1.jpg",
            index_character: "a",
            is_meme_verified: false,
            is_verified: true,
            name: "Alan Walker",
            slug: "Alan-walker",
            url: "https://genius.com/artists/Alan-walker",
            iq: 3463,
          },
        },
      },
    ],
  };
  return result.hits;
};

export const searchLyrics = async (id) => {
  /* try {
    const response = await fetch(`${BASE_URL}/song/lyrics/?id=${id}`, options);
    const result = await response.json();
    return result.lyrics.lyrics.body;
  } catch (error) {
    console.error(error);
  } */
  const result = {
    lyrics: {
      _type: "lyrics",
      api_path: "/songs/2396871/lyrics",
      lyrics: {
        body: {
          html: '<p>[Verse 1]<br>\n<a href="/9234498/Alan-walker-faded/You-were-the-shadow-to-my-light-did-you-feel-us" data-id="9234498" class="has_comments" data-editorial-state="accepted" data-classification="accepted">You were the shadow to my light<br>\nDid you feel us?</a><br>\n<a href="/8550469/Alan-walker-faded/Another-star-you-fade-away" data-id="8550469" class="has_pinned_annotation has_verified_annotation" data-editorial-state="accepted" data-classification="verified">Another star, you fade away</a><br>\n<a href="/8803010/Alan-walker-faded/Afraid-our-aim-is-out-of-sight-wanna-see-us-alight" data-id="8803010" data-editorial-state="accepted" data-classification="accepted">Afraid our aim is out of sight<br>\nWanna see us alight</a><br>\n<br>\n[Pre-Chorus 1]<br>\n<a href="/8774219/Alan-walker-faded/Where-are-you-now-where-are-you-now-where-are-you-now-was-it-all-in-my-fantasy-where-are-you-now-were-you-only-imaginary" data-id="8774219" data-editorial-state="accepted" data-classification="accepted">Where are you now?<br>\nWhere are you now?<br>\nWhere are you now?<br>\nWas it all in my fantasy?<br>\nWhere are you now?<br>\nWere you only imaginary?</a><br>\n<br>\n[Chorus]<br>\n<a href="/8803037/Alan-walker-faded/Where-are-you-now-atlantis-under-the-sea-under-the-sea-where-are-you-now-another-dream" data-id="8803037" data-editorial-state="accepted" data-classification="accepted">Where are you now?<br>\nAtlantis, under the sea, under the sea<br>\nWhere are you now? Another dream</a><br>\n<a href="/8774227/Alan-walker-faded/The-monsters-running-wild-inside-of-me" data-id="8774227" data-editorial-state="accepted" data-classification="accepted">The monster\'s running wild inside of me</a><br>\n<a href="/8550463/Alan-walker-faded/Im-faded-im-faded-so-lost-im-faded-im-faded-so-lost-im-faded" data-id="8550463" class="has_comments has_pending_edits has_pinned_annotation has_verified_annotation" data-editorial-state="needs_exegesis" data-classification="verified">I\'m faded, I\'m faded<br>\nSo lost, I\'m faded, I\'m faded<br>\nSo lost, I\'m faded</a><br>\n<br>\n[Verse 2]<br>\n<a href="/8894966/Alan-walker-faded/These-shallow-waters-never-met-what-i-needed-im-letting-go-a-deeper-dive-eternal-silence-of-the-sea-im-breathing-alive" data-id="8894966" data-editorial-state="accepted" data-classification="accepted">These shallow waters never met what I needed<br>\nI\'m letting go, a deeper dive<br>\nEternal silence of the sea<br>\nI\'m breathing, alive</a><br>\n<br>\n[Pre-Chorus 2]<br>\n<a href="/9066587/Alan-walker-faded/Where-are-you-now-where-are-you-now" data-id="9066587" data-editorial-state="accepted" data-classification="accepted">Where are you now?<br>\nWhere are you now?</a><br>\n<a href="/8920001/Alan-walker-faded/Under-the-bright-but-faded-lights" data-id="8920001" data-editorial-state="accepted" data-classification="accepted">Under the bright but faded lights</a><br>\n<a href="/9066597/Alan-walker-faded/You-set-my-heart-on-fire" data-id="9066597" data-editorial-state="accepted" data-classification="accepted">You set my heart on fire</a><br>\n<a href="/9066587/Alan-walker-faded/Where-are-you-now-where-are-you-now" data-id="9066587" data-editorial-state="accepted" data-classification="accepted">Where are you now?<br>\nWhere are you now?</a><br>\n<br>\n[Chorus]<br>\n<a href="/8803037/Alan-walker-faded/Where-are-you-now-atlantis-under-the-sea-under-the-sea-where-are-you-now-another-dream" data-id="8803037" data-editorial-state="accepted" data-classification="accepted">Where are you now?<br>\nAtlantis, under the sea, under the sea<br>\nWhere are you now? Another dream</a><br>\n<a href="/8774227/Alan-walker-faded/The-monsters-running-wild-inside-of-me" data-id="8774227" data-editorial-state="accepted" data-classification="accepted">The monster\'s running wild inside of me</a><br>\n<a href="/8550463/Alan-walker-faded/Im-faded-im-faded-so-lost-im-faded-im-faded-so-lost-im-faded" data-id="8550463" class="has_comments has_pending_edits has_pinned_annotation has_verified_annotation" data-editorial-state="needs_exegesis" data-classification="verified">I\'m faded, I\'m faded<br>\nSo lost, I\'m faded, I\'m faded<br>\nSo lost, I\'m faded</a></p>\n\n',
          children: [
            {
              children: [
                "[Verse 1]",
                {
                  tag: "br",
                },
                "",
                {
                  children: [
                    "You were the shadow to my light",
                    {
                      tag: "br",
                    },
                    "Did you feel us?",
                  ],
                  data: {
                    classification: "accepted",
                    editorialState: "accepted",
                    id: "9234498",
                  },
                  attributes: {
                    class: "has_comments",
                    href: "/9234498/Alan-walker-faded/You-were-the-shadow-to-my-light-did-you-feel-us",
                  },
                  tag: "a",
                },
                {
                  tag: "br",
                },
                "",
                {
                  children: ["Another star, you fade away"],
                  data: {
                    classification: "verified",
                    editorialState: "accepted",
                    id: "8550469",
                  },
                  attributes: {
                    class: "has_pinned_annotation has_verified_annotation",
                    href: "/8550469/Alan-walker-faded/Another-star-you-fade-away",
                  },
                  tag: "a",
                },
                {
                  tag: "br",
                },
                "",
                {
                  children: [
                    "Afraid our aim is out of sight",
                    {
                      tag: "br",
                    },
                    "Wanna see us alight",
                  ],
                  data: {
                    classification: "accepted",
                    editorialState: "accepted",
                    id: "8803010",
                  },
                  attributes: {
                    href: "/8803010/Alan-walker-faded/Afraid-our-aim-is-out-of-sight-wanna-see-us-alight",
                  },
                  tag: "a",
                },
                {
                  tag: "br",
                },
                "",
                {
                  tag: "br",
                },
                "[Pre-Chorus 1]",
                {
                  tag: "br",
                },
                "",
                {
                  children: [
                    "Where are you now?",
                    {
                      tag: "br",
                    },
                    "Where are you now?",
                    {
                      tag: "br",
                    },
                    "Where are you now?",
                    {
                      tag: "br",
                    },
                    "Was it all in my fantasy?",
                    {
                      tag: "br",
                    },
                    "Where are you now?",
                    {
                      tag: "br",
                    },
                    "Were you only imaginary?",
                  ],
                  data: {
                    classification: "accepted",
                    editorialState: "accepted",
                    id: "8774219",
                  },
                  attributes: {
                    href: "/8774219/Alan-walker-faded/Where-are-you-now-where-are-you-now-where-are-you-now-was-it-all-in-my-fantasy-where-are-you-now-were-you-only-imaginary",
                  },
                  tag: "a",
                },
                {
                  tag: "br",
                },
                "",
                {
                  tag: "br",
                },
                "[Chorus]",
                {
                  tag: "br",
                },
                "",
                {
                  children: [
                    "Where are you now?",
                    {
                      tag: "br",
                    },
                    "Atlantis, under the sea, under the sea",
                    {
                      tag: "br",
                    },
                    "Where are you now? Another dream",
                  ],
                  data: {
                    classification: "accepted",
                    editorialState: "accepted",
                    id: "8803037",
                  },
                  attributes: {
                    href: "/8803037/Alan-walker-faded/Where-are-you-now-atlantis-under-the-sea-under-the-sea-where-are-you-now-another-dream",
                  },
                  tag: "a",
                },
                {
                  tag: "br",
                },
                "",
                {
                  children: ["The monster's running wild inside of me"],
                  data: {
                    classification: "accepted",
                    editorialState: "accepted",
                    id: "8774227",
                  },
                  attributes: {
                    href: "/8774227/Alan-walker-faded/The-monsters-running-wild-inside-of-me",
                  },
                  tag: "a",
                },
                {
                  tag: "br",
                },
                "",
                {
                  children: [
                    "I'm faded, I'm faded",
                    {
                      tag: "br",
                    },
                    "So lost, I'm faded, I'm faded",
                    {
                      tag: "br",
                    },
                    "So lost, I'm faded",
                  ],
                  data: {
                    classification: "verified",
                    editorialState: "needs_exegesis",
                    id: "8550463",
                  },
                  attributes: {
                    class:
                      "has_comments has_pending_edits has_pinned_annotation has_verified_annotation",
                    href: "/8550463/Alan-walker-faded/Im-faded-im-faded-so-lost-im-faded-im-faded-so-lost-im-faded",
                  },
                  tag: "a",
                },
                {
                  tag: "br",
                },
                "",
                {
                  tag: "br",
                },
                "[Verse 2]",
                {
                  tag: "br",
                },
                "",
                {
                  children: [
                    "These shallow waters never met what I needed",
                    {
                      tag: "br",
                    },
                    "I'm letting go, a deeper dive",
                    {
                      tag: "br",
                    },
                    "Eternal silence of the sea",
                    {
                      tag: "br",
                    },
                    "I'm breathing, alive",
                  ],
                  data: {
                    classification: "accepted",
                    editorialState: "accepted",
                    id: "8894966",
                  },
                  attributes: {
                    href: "/8894966/Alan-walker-faded/These-shallow-waters-never-met-what-i-needed-im-letting-go-a-deeper-dive-eternal-silence-of-the-sea-im-breathing-alive",
                  },
                  tag: "a",
                },
                {
                  tag: "br",
                },
                "",
                {
                  data: {
                    name: "primis_desktop_song_player",
                  },
                  tag: "inread-ad",
                },
                "[Pre-Chorus 2]",
                {
                  tag: "br",
                },
                "",
                {
                  children: [
                    "Where are you now?",
                    {
                      tag: "br",
                    },
                    "Where are you now?",
                  ],
                  data: {
                    classification: "accepted",
                    editorialState: "accepted",
                    id: "9066587",
                  },
                  attributes: {
                    href: "/9066587/Alan-walker-faded/Where-are-you-now-where-are-you-now",
                  },
                  tag: "a",
                },
                {
                  tag: "br",
                },
                "",
                {
                  children: ["Under the bright but faded lights"],
                  data: {
                    classification: "accepted",
                    editorialState: "accepted",
                    id: "8920001",
                  },
                  attributes: {
                    href: "/8920001/Alan-walker-faded/Under-the-bright-but-faded-lights",
                  },
                  tag: "a",
                },
                {
                  tag: "br",
                },
                "",
                {
                  children: ["You set my heart on fire"],
                  data: {
                    classification: "accepted",
                    editorialState: "accepted",
                    id: "9066597",
                  },
                  attributes: {
                    href: "/9066597/Alan-walker-faded/You-set-my-heart-on-fire",
                  },
                  tag: "a",
                },
                {
                  tag: "br",
                },
                "",
                {
                  children: [
                    "Where are you now?",
                    {
                      tag: "br",
                    },
                    "Where are you now?",
                  ],
                  data: {
                    classification: "accepted",
                    editorialState: "accepted",
                    id: "9066587",
                  },
                  attributes: {
                    href: "/9066587/Alan-walker-faded/Where-are-you-now-where-are-you-now",
                  },
                  tag: "a",
                },
                {
                  tag: "br",
                },
                "",
                {
                  tag: "br",
                },
                "[Chorus]",
                {
                  tag: "br",
                },
                "",
                {
                  children: [
                    "Where are you now?",
                    {
                      tag: "br",
                    },
                    "Atlantis, under the sea, under the sea",
                    {
                      tag: "br",
                    },
                    "Where are you now? Another dream",
                  ],
                  data: {
                    classification: "accepted",
                    editorialState: "accepted",
                    id: "8803037",
                  },
                  attributes: {
                    href: "/8803037/Alan-walker-faded/Where-are-you-now-atlantis-under-the-sea-under-the-sea-where-are-you-now-another-dream",
                  },
                  tag: "a",
                },
                {
                  tag: "br",
                },
                "",
                {
                  children: ["The monster's running wild inside of me"],
                  data: {
                    classification: "accepted",
                    editorialState: "accepted",
                    id: "8774227",
                  },
                  attributes: {
                    href: "/8774227/Alan-walker-faded/The-monsters-running-wild-inside-of-me",
                  },
                  tag: "a",
                },
                {
                  tag: "br",
                },
                "",
                {
                  children: [
                    "I'm faded, I'm faded",
                    {
                      tag: "br",
                    },
                    "So lost, I'm faded, I'm faded",
                    {
                      tag: "br",
                    },
                    "So lost, I'm faded",
                  ],
                  data: {
                    classification: "verified",
                    editorialState: "needs_exegesis",
                    id: "8550463",
                  },
                  attributes: {
                    class:
                      "has_comments has_pending_edits has_pinned_annotation has_verified_annotation",
                    href: "/8550463/Alan-walker-faded/Im-faded-im-faded-so-lost-im-faded-im-faded-so-lost-im-faded",
                  },
                  tag: "a",
                },
              ],
              tag: "p",
            },
            "",
          ],
          tag: "root",
          plain:
            "[Verse 1]\nYou were the shadow to my light\nDid you feel us?\nAnother star, you fade away\nAfraid our aim is out of sight\nWanna see us alight\n\n[Pre-Chorus 1]\nWhere are you now?\nWhere are you now?\nWhere are you now?\nWas it all in my fantasy?\nWhere are you now?\nWere you only imaginary?\n\n[Chorus]\nWhere are you now?\nAtlantis, under the sea, under the sea\nWhere are you now? Another dream\nThe monster's running wild inside of me\nI'm faded, I'm faded\nSo lost, I'm faded, I'm faded\nSo lost, I'm faded\n\n[Verse 2]\nThese shallow waters never met what I needed\nI'm letting go, a deeper dive\nEternal silence of the sea\nI'm breathing, alive\n\n[Pre-Chorus 2]\nWhere are you now?\nWhere are you now?\nUnder the bright but faded lights\nYou set my heart on fire\nWhere are you now?\nWhere are you now?\n\n[Chorus]\nWhere are you now?\nAtlantis, under the sea, under the sea\nWhere are you now? Another dream\nThe monster's running wild inside of me\nI'm faded, I'm faded\nSo lost, I'm faded, I'm faded\nSo lost, I'm faded",
        },
      },
      path: "/Alan-walker-faded-lyrics",
      song_id: 2396871,
      trackingData: {
        "Song ID": 2396871,
        Title: "Faded",
        "Primary Artist": "Alan Walker",
        "Primary Artist ID": 456537,
        "Primary Album": "Different World",
        "Primary Album ID": 368574,
        Tag: "pop",
        "Primary Tag": "pop",
        "Primary Tag ID": 16,
        "Music?": true,
        "Annotatable Type": "Song",
        "Annotatable ID": 2396871,
        featured_video: true,
        cohort_ids: [11],
        has_verified_callout: true,
        has_featured_annotation: true,
        created_at: "2015-12-26T02:05:44Z",
        created_month: "2015-12-01",
        created_year: 2015,
        song_tier: "C",
        "Has Recirculated Articles": false,
        "Lyrics Language": "en",
        "Has Apple Match": true,
        "Release Date": "2015-12-03",
        "NRM Tier": 2,
        "NRM Target Date": "2018-12-14",
        "Has Description": true,
        "Has Youtube URL": true,
        "Has Translation Q&A": true,
        "Comment Count": 315,
        hot: false,
        web_interstitial_variant: "interstitial",
        two_column_song_page: true,
        platform_variant: "desktop_react_2_column",
      },
    },
  };
  /**lyrics are html in text format */
  const htmlString = result.lyrics.lyrics.body.html;
  /**remove all "a" tags */
  const strippedHtmlString = htmlString.replace(/<a\s+href=[^>]*>|<\/a>/gi, "");
  /**replace "[]"" with "<span>[]</span>", for styling purposes" */
  const lyricsHtmlString = strippedHtmlString.replace(
    /\[([^\]]+)\]/g,
    "<span>$&</span>"
  );
  return lyricsHtmlString;
};
