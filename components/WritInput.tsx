"use client"
import React, { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
const WritInput = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: "<p>Hello</p>",
        editorProps: {
            attributes: {
                class:
                    "prose prose-sm sm:pros-base lg:prose-lg xl:prose-2xl outline-none min-h-[250px]"
            }
        }
        ,

    })
    return (
        <div>
            <h2 className='text-2xl my-4'>Editor</h2>
            <EditorContent editor={editor} className='outline-none border-gray-400 border-2 rounded-xl' />
        </div>
    )
}

export default WritInput
