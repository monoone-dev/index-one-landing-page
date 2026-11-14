---
title: Local AI server
description: Let a model you run yourself in Ollama, LM Studio, oMLX or llama.cpp write IndexOne's notes and answers, on this Mac or on your own network.
keywords: local ai server, ollama, lm studio, omlx, llama.cpp, openai-compatible, context allowance, api key, keychain, test connection, load models, network server
---

If you already run your own models, IndexOne can use them. The Local AI server section lets Ollama, LM Studio, oMLX, llama.cpp or another OpenAI-compatible server write your notes and Ivy's answers. Ivy stays the default; this is an advanced option that is off until you set it up.

## Set it up

1. Open Settings › AI Models and expand **Local AI server (advanced)** at the bottom.
2. Enter the server's **Address**. The usual ones are:

   | Server | Address |
   | --- | --- |
   | Ollama | `http://localhost:11434` |
   | LM Studio | `http://localhost:1234` |
   | oMLX | `http://localhost:8000` |

3. If your server asks for one, enter its **API key (optional)**.
4. Type a **Model** name, or choose **Load models** and pick one the server offers.
5. Set the **Context allowance**.
6. Choose **Test connection**, then **Save**.

Once saved, the section shows **On**, and **Local AI server** becomes one more choice in **AI in this workspace**. Pick it for each workspace where you want it; see [AI in each workspace](/docs/ai-models/). To stop using it, choose **Turn off**.

Transcription still runs on this Mac with Whisper. The server writes the notes and answers.

## Context allowance

The context allowance is the amount of text the model can read at once: its context window, the same idea as Ollama's `num_ctx`. The smallest value is 16K (16,384 tokens), so a note request always fits; the default is 32K.

- Ollama gets your context allowance with every request.
- For other servers, load the model with at least this window.

A long meeting is condensed part by part to fit the allowance, instead of being cut off. The room left for the transcript is measured from the real request, including your typed notes and related notes. If the server stops a note at its length limit, IndexOne reports the note as incomplete and does not save it.

## API key

The API key field is for servers that ask for one, such as oMLX with an API key set. The key is kept in your Mac's Keychain, never in IndexOne's settings, and is sent only to the address you entered. If you change the address, enter the key again. **Remove key** deletes it.

## Test connection

When the server answers, Test connection shows the model and the response time, for example "Connected · your-model answered in 850 ms". When something goes wrong, it says what happened:

| Message | What to do |
| --- | --- |
| Your local AI server didn't answer. | Check that it is running and that the address and port are right. |
| Your local AI server asks for an API key. | Enter it in the API key field. |
| Your local AI server refused the API key. | Copy the key from the server's settings and enter it again. |
| Your local AI server doesn't have this model. | Press Load models and pick one it offers. |
| Your local AI server ran out of memory for this model. | Lower the context allowance or pick a smaller model. |
| Your local AI server redirected to another address. | Enter the address it redirects to. |
| Something answers at this address, but it isn't an Ollama or OpenAI-compatible AI server. | Check the port. |
| Your local AI server answered with an error. | Its own window or log says why. |

## A server on this Mac or on your network

Where your text goes depends only on the address.

- **On this Mac** (`localhost`, `127.0.0.1` or `::1`): nothing leaves your Mac. The workspace choice reads "Nothing goes to an outside AI."
- **Anywhere else on your network**: IndexOne treats it like an outside AI. The section warns that meeting text will be sent to that host, and you must tick **Send meeting text to** that host before you can save. Names are masked first; see [Redaction](/docs/redaction/).

IndexOne contacts only the address you entered and confirmed. It does not follow redirects and does not use a proxy from your environment, so meeting text and the API key never reach another host.

> [!NOTE]
> Older notes written with the former Ollama provider are labelled "Ollama on this Mac". The Local AI server section arrived in [3.17.1](/changelog/#v3.17.1); API keys and the detailed test messages in [3.17.2](/changelog/#v3.17.2).
