+++
title = "Schnorr and Taproot make it into Bitcoin codebase. So what?"
description = "A commentary on the news that Schnorr and Taproot have been incorporated into Bitcoin codebase."
date = "2020-10-18"
thumbnail = ""
enableWhoami = true
categories = [
  "blockchain", "explainer"
]
tags = ["taproot", "Bitcoin", "schnorr", "tapscript"]

[distill]
  [distill.supportFiles]
  dtitle = "dtitle.html"
  appendix = "appendix.html"
  bibliography = "refs.bib"

  [[distill.authors]]
  author = "Corey Petty"
  authorURL = "http://coreypetty.com/"

    [[distill.authors.affiliations]]
    name = "Status.im"
    url = "https://status.im"

    [[distill.authors.affiliations]]
    name = "The Bitcoin Podcast"
    url = "https://thebitcoinpodcast.com"

    [[distill.authors.affiliations]]
    name = "Hashing It Out"
    url = "https://hashingitout.stream"

    [[distill.authors.affiliations]]
    name = "BlockChannel"
    url = "https://blockchannel.com"
+++


<d-abstract>
  <p>As per usual, folks were sending interesting news in he Bitcoin Podcast slack. This one happened to catch my eye as it's an update I've been waiting for; Bitcoin is getting two major improvements in historic code update from Decrypt. I immediately said we would talk about this in the upcoming The Bitcoin Podcast episode roundtable. But first, I'd wanted to take some notes and jot down a few things so that I can share what these technologies are, what they potentially mean, and the remaining road ahead for those that don't listen the podcast, but are still interested. </p>
</d-abstract>

As per usual{{<footnote>}}some text here{{</footnote>}}, folks were sending interesting news in he Bitcoin Podcast slack. This one happened to catch my eye as it's an update I've been waiting for; [Bitcoin is getting two major improvements in historic code update](https://decrypt.co/45138/bitcoin-is-getting-two-major-improvements-in-historic-code-update) from Decrypt. I immediately said we would talk about this in the upcoming The Bitcoin Podcast episode roundtable. But first, I'd wanted to take some notes and jot down a few things so that I can share what these technologies are, what they potentially mean, and the remaining road ahead for those that don't listen the podcast, but are still interested. 

For those who would like to listen to our conversation about this on The Bitcoin podcast, here's the episode:

{{<podcast-embed url="https://player.simplecast.com/282003ff-6b58-4359-93e9-b807f87704f4?dark=true">}}

I'm also trying to write more (hence this website / blog / resource / whatever).

## What happened?
For those that don't know, the Bitcoin ecosystem has been working on some protocol level improvements that drastically expand the capabilities of the system. On October 15th, 2020, a [pull request](https://github.com/bitcoin/bitcoin/pull/19953) was merged into the Bitcoin Core codebase which adds a bunch of new features which have been under review for quite a long time. Namely, Schnorr signatures{{<cite bib="BIP340-schnorr">}}, Taproot{{<cite bib="BIP341-taproot">}}, and Tapscript{{<cite bib="BIP342-tapscript">}}.

## What do those words mean?
Many have already asked me what these different changes are, so I'm going to try and conceptually explain them at a high level:

### Schnorr Signatures
To start, I did a [Hashing It Out Interview](http://thebitcoinpodcast.com/hashing-it-out-51/) with Andrew Poelstra about a year ago that described Schnorr signatures{{<cite bib="schnorrwikipedia">}} with some detail, I'd recommend checking it out. For the lazy, or those that don't like audio content, here's an overview:

Currently, the Bitcoin protocol uses digital signatures to sign messages. The algorithm used to do this is ECDSA, specifically for keypairs on the secp256k1 curve{{<cite bib="BIP340-schnorr,khatwani2020schnorr">}}. The proposal is to extend signature schemes to include the ability to sign messages via the Schnorr algorithm (on the same curve). At a high level, _this allows a message that is signed by multiple keys to be aggregated into a single signature_, which results in a more efficient message size. This algorithm also has efficiency gains in verification and authentication processes. 

For instance, if you'd like to send a transaction that requires multiple UTXOs, you would previously have to include every signature of each UXTO included in the message (this is very common occurrence as HD wallets are standard practice). The Schnorr algorithm turns all of those signatures into a single signature. 

### Taproot
Taproot is an improvement on a different technology called `Merkelized Abstract Syntax Tree` or MAST. In short, a MAST allows you to stack Bitcoin scripts into a Merkle tree, expanding the possible things a Bitcoin txn is capable of doing{{<cite bib="khatwani2020taproot">}}. 

### Tapscript
Tapscript is a short name for referring to the updates required to the validation process in Bitcoin. Taproot is an update to the Bitcoin script language. More specifically, it aims at including the previously mentioned technologies available so that Bitcoin is capable of validating transactions that use them. 

## What happens next?
So this post is all about the fact that the code has been incorporated into the main client codebase, but that isn't the end of the story. In order for these technologies to _actually be used_ in Bitcoin, the community will have to go through some activation mechanism. 

## Some thoughts on the repercussions
text TBD