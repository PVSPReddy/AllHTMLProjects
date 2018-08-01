Function get_files(path)
  Dim List
  Set fso = CreateObject("Scripting.FileSystemObject")
  Set Folder = fso.GetFolder(path)
  Set Files = Folder.Files
  List = ""
  If Files.Count > 0 Then
    For Each File In Files
      List = List & File.Name & "|"
    Next
  End If
  get_files = List
End Function